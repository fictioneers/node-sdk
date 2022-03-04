import fetch from "node-fetch"
import { v4 as uuidv4 } from 'uuid'

class Fictioneers {
    /**
     * A lightweight SDK interface to the Fictioneers API
     * @param {string} apiSecretKey 
     * @param {(null|string)} userId 
     * @returns {object}
     */
    constructor({apiSecretKey, userId = null}) {
        if(typeof window !== 'undefined'){
            throw new Error("This API is for server-side usage only. Your apiSecretKey should never be visible client-side.")
        }

        if(userId == null){
            userId = Fictioneers._uuidv4()
        }
        
        if(!(this instanceof Fictioneers)){
            return new Fictioneers(apiSecretKey, userId)
        }

        this.apiSecretKey = apiSecretKey
        this.userId = userId
        this.accessToken // only create this the first time when needed
        this.accessTokenExpiry
        this._endpoint = "https://api.fictioneers.co.uk/api/v1"
    }

    /**
     * generate and save a new ID Token which can be used to authenticate against the Audience APIs.
     * @param {string} userId 
     * @param {string} apiSecretKey 
     * @returns {object}
     */
    static getAccessToken = async(userId, apiSecretKey) => {
        const response = await fetch(Fictioneers._endpoint + "/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": apiSecretKey
            },
            body: JSON.stringify({
                user_id: userId
            })
        })

        const accessToken = await response.json()
        return {
            "accessToken": accessToken.id_token,
            "expiresIn": accessToken.expires_in
        }
    }

    /**
     * Create a uuid v4 string
     * @returns {string}
     */
    static _uuidv4 = () => {
        return uuidv4()
    }

    /**
     * If necessary, generate and save a new ID Token which can be used to authenticate against the Audience APIs.
     */
    async setAccessToken() {
        if(!this.accessToken || this.accessTokenExpiry < Date.now()){
            const {accessToken, expiresIn} = await Fictioneers.getAccessToken()
            this.accessToken = accessToken
            this.accessTokenExpiry = Date.now() + ((expiresIn - 10) * 1000) // when the access token will expire, minus a period of 10 seconds
        }
    }

    /* Admin */
    /* Admin service to programatically manage timelines and timeline users. A secret API Key is required in the HTTP Authorization header. */

    /**
     * List all published timelines which users can be placed on.
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#list-all-published-timelines
     */
    async getTimelines() {
        const response = await fetch(this._endpoint + "/timelines", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiSecretKey
            }
        })
        return response.json()
    }

    /**
     * Representation of a single timeline.
     * @param {string} timelineId 
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#retrieves-timeline
     */
    async getTimeline(timelineId) {
        const response = await fetch(this._endpoint + `/timelines/${timelineId}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiSecretKey
            }
        })
        return response.json()
    }

    /**
     * List of all users on timeline.
     * @param {string} timelineId 
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#list-all-timeline-users
     */
    async getTimelineUsers(timelineId) {
        const response = await fetch(this._endpoint + `/timelines/${timelineId}/users`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiSecretKey
            }
        })
        return response.json()
    }

    /**
     * Delete all users on a timeline.
     * @param {string} timelineId 
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#delete-all-timeline-users
     */
    async deleteTimelineUsers(timelineId) {
        const response = await fetch(this._endpoint + `/timelines/${timelineId}/users`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiSecretKey
            }
        })
        return response.json()
    }

    /**
     * Retrieves timeline user.
     * @param {string} timelineId 
     * @param {string} userId 
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#retrieves-timeline-user
     */
    async getTimelineUser(timelineId, userId = null) {
        if(userId == null){
            userId = this.userId
        }
        const response = await fetch(this._endpoint + `/timelines/${timelineId}/users/${userId}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiSecretKey
            }
        })
        return response.json()
    }

    /**
     * Delete timeline user.
     * @param {string} timelineId 
     * @param {string} userId 
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#delete-timeline-user
     */
    async deleteTimelineUser(timelineId, userId = null) {
        if(userId == null){
            userId = this.userId
        }
        const response = await fetch(this._endpoint + `/timelines/${timelineId}/users/${userId}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiSecretKey
            }
        })
        return response.json()
    }

    /**
     * Returns all event state changes filtered by timeline.
     * @param {string} timelineId 
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#list-all-event-state-changes-for-timeline
     */
    async getTimelineEventStateChanges(timelineId) {
        const response = await fetch(this._endpoint + `/timelines/${timelineId}/event-state-changes/`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": this.apiSecretKey
            }
        })
        return response.json()
    }

    /* Users */
    /* User from the authentication token. */

    /**
     * Retrieve detailed representation of the current user.
     * Optionally include the serialized user narrative by including a include_narrative_state GET param.
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#retrieve-current-user
     */
    async getUser(includeNarrativeState = false) {
        await this.setAccessToken()
        if(includeNarrativeState !== true){
            includeNarrativeState = false
        }
        const response = await fetch(this._endpoint + "/users/me", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                "include_narrative_state": includeNarrativeState
            })
        })
        return response.json()
    }

    /**
     * Delete the user and any user associated objects from the current timeline.
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#delete-current-user
     */
    async deleteUser() {
        await this.setAccessToken()
        const response = await fetch(this._endpoint + "/users/me", {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.accessToken}`
            }
        })
        return response.json()
    }

    /**
     * Update the display name of the current user.
     * @param {string} displayName 
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#update-current-user
     */
    async updateUser(displayName) {
        await this.setAccessToken()
        const response = await fetch(this._endpoint + "/users/me", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                "display_name": displayName
            })
        })
        return response.json()
    }

    /**
     * Create a new audience user for a Fictioneers powered experience.
     * @param {string} timelineId 
     * @param {boolean} disableTimeGuards 
     * @param {boolean} pauseAtBeats 
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#create-new-audience-user
     */
    async createUser(timelineId, disableTimeGuards = false, pauseAtBeats = false) {
        await this.setAccessToken()

        // TODO - does the user exist already? 
        // await this.getUser()
        
        if(disableTimeGuards !== true) {
            disableTimeGuards = false
        }
        if(pauseAtBeats !== true){
            pauseAtBeats = false
        }

        const response = await fetch(this._endpoint + "/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                "published_timeline_id": timelineId,
                "timezone": "Europe/London",
                "disable_time_guards": disableTimeGuards,
                "pause_at_beats": pauseAtBeats
            })
        })
        return response.json()
    }

    /* User story state */
    /* User story state for the authenticated user. */

    /**
     * Representation of authenticated users narrative story state.
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#retrieves-user-narrative-state
     */
    async getUserStoryState() {
        await this.setAccessToken()
        const response = await fetch(this._endpoint + "/user-story-state", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.accessToken}`
            }
        })
        return response.json()
    }
    
    /**
     * Progress events based on the authenticated user available transition events.
     * @param {(null|number)} maxSteps 
     * @param {boolean} pauseAtBeats 
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#progress-timeline-events
     */
    async progressUserStoryStateEvents(maxSteps = null, pauseAtBeats = true) {
        await this.setAccessToken()
        if(pauseAtBeats !== false){
            pauseAtBeats = true
        }
        if(maxSteps !== null){
            maxSteps = parseInt(maxSteps)
        }
        const response = await fetch(this._endpoint + "/user-story-state/progress-events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                "max_steps": maxSteps,
                "pause_at_beats": pauseAtBeats
            })
        })
        return response.json()
    }


    /* User timeline hooks */
    /* Timeline hooks for the authenticated user. */

    /**
     * List endpoint for user timeline events implicitly filtered by the authenticated user ID.
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#lists-all-timeline-hooks
     */
    async getUserTimelineHooks() {
        await this.setAccessToken()
        const response = await fetch(this._endpoint + "/user-timeline-hooks", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.accessToken}`
            }
        })
        return response.json()
    }



    /* User interactables */
    /* Interactables for the authenticated user. */

    /**
     * List endpoint for interactables implicitly filtered by the authenticated user ID.
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#lists-all-user-interactables
     */
    async getUserInteractables() {
        await this.setAccessToken()
        const response = await fetch(this._endpoint + "/user-interactables", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.accessToken}`
            }
        })
        return response.json()
    }

    /**
     * Retrieves a specified user interactable
     * @param {string} interactableId 
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#retrieves-user-interactable
     */
    async getUserInteractable(interactableId) {
        await this.setAccessToken()
        const response = await fetch(this._endpoint + `/user-interactables/${interactableId}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.accessToken}`
            }
        })
        return response.json()
    }

    /**
     * Update a specified user interactable
     * @param {string} interactableId 
     * @param {string} state 
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#update-user-interactable
     */
    async updateUserInteractable(interactableId, state) {
        await this.setAccessToken()
        const response = await fetch(this._endpoint + `/user-interactables/${interactableId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                "state": state
            })
        })
        return response.json()
    }


    /* Timeline interactables */
    /* All the interactables referenced on the users current timeline (irrespective of their current position). */

    /**
     * List endpoint for timeline interactables (filterable by type).
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#lists-timeline-interactables
     */
    async getTimelineInteractables() {
        await this.setAccessToken()
        const response = await fetch(this._endpoint + "/timeline-interactables", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.accessToken}`
            }
        })
        return response.json()
    }

    /**
     * Retrieves a specified timeline interactable
     * @param {string} interactableId 
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#retrieves-timeline-interactable
     */
    async getTimelineInteractable(interactableId) {
        await this.setAccessToken()
        const response = await fetch(this._endpoint + `/timeline-interactables/${interactableId}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.accessToken}`
            }
        })
        return response.json()
    }
    

    /* Timeline events */
    /* All the events referenced on the users current timeline (irrespective of their current posiiton). */

    /**
     * List endpoint for timeline events.
     * @returns {Promise}
     * @link https://storage.googleapis.com/fictioneers-developer-docs/build/index.html#lists-all-timeline-events
     */
    async getTimelineEvents() {
        await this.setAccessToken()
        const response = await fetch(this._endpoint + "/timeline-events", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${this.accessToken}`
            }
        })
        return response.json()
    }
}

export default Fictioneers
