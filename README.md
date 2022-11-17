# Fictioneers API: Node SDK
This is a simple SDK for use when connecting to the Fictioneers API from the server-side.

To use, you require your Fictioneers secret key, and optionally, a user ID. If you do not provide a user ID, and the API call requires one, the SDK will create one for you, which you can retrieve either from the API response or from the SDK with `getUserId()`.

    const fictioneers = new Fictioneers({
        apiSecretKey: "s_xxxxx", // mandatory
        userId: "1234-5678" // optional
    })

The methods are asynchronous and (mostly) return a Promise which resolves to JSON. Use like this, for example:

    const timelines = await fictioneers.getTimelines()
    for (timeline in timelines) {
        ...
    }

The following methods are provided in addition to the methods that map to the Fictioneers API:

- `getUserId()`
- `setUserId()`

These methods map to the corresponding methods in the API:

## Auth ##

The method `getAccessToken()` is used internally by the SDK, so you shouldn't need to use it, but calling it will return the access token used by the SDK to call the API.

The method `setAccessToken()` will both call `getAccessToken()` to generate a new access token and reset the access token within the SDK, if the SDK's current access token is either not present or has expired. Again, you shouldn't normally need to use this method.

## Admin ##

Admin service to programatically manage timelines and timeline users. A secret API Key is required in the HTTP Authorization header.

- `getTimelines()` => `GET /timelines`
- `getTimeline({timelineId})` => `GET /timelines/${timelineId}`
- `getTimelineUsers({timelineId})` => `GET /timelines/${timelineId}/users`
- `deleteTimelineUsers({timelineId})` => `DELETE /timelines/${timelineId}/users`
- `getTimelineUser({timelineId, userId = null})` => `GET /timelines/${timelineId}/users/${userId}`
- `deleteTimelineUser({timelineId, userId = null})` => `DELETE /timelines/${timelineId}/users/${userId}`
- `getTimelineEventStateChanges({timelineId})` => `GET /timelines/${timelineId}/event-state-changes/`

## Users ##

User from the authentication token.

- `getUser({includeNarrativeState = false})` => `GET /users/me`
- `deleteUser()` => `DELETE /users/me`
- `updateUser({displayName})` => `PATCH /users/me`
- `createUser({timelineId, disableTimeGuards = false, pauseAtBeats = false})` => `POST /users`

## User story state ##

Methods relating to the user's story state

- `getUserStoryState()` => `GET /user-story-state`
- `updateUserStoryState({currentTimelineEventId})` => `PATCH /user-story-state`
- `progressUserStoryStateEvents({maxSteps = null, pauseAtBeats = true})` => `POST /user-story-state/progress-events`

## User timeline events ##

Methods relating to timeline events, as distinct from hooks.

- `getUserTimelineEvents()` => `GET /user-timeline-events`
- `updateUserTimelineEvent({timelineEventId, state})` => `PATCH /user-timeline-events/${timelineEventId}`

## Timeline events ##

All the events referenced on the users current timeline (irrespective of their current posiiton).

- `getTimelineEvents()` => `GET /timeline-events`

For further information on these methods and the parameters, please view [the documentation](https://docs.fictioneers.co.uk/)
