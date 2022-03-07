# Fictioneers API: Node SDK
This is a simple SDK for use when connecting to the Fictioneers API from the server-side.

To use, you require your Fictioneers secret key, and optionally, a user ID. If you do not provide a user ID, and the API call requires one, the SDK will create one for you, which you can retrieve either from the API response or from the SDK with `getUserId()`.

`const fictioneers = new Fictioneers({apiSecretKey: "s_xxxxx", userId: "1234-5678"})`

The methods are asynchronous and (mostly) return a Promise which resolves to JSON. Use like this, for example:

`const timelines = await fictioneers.getTimelines()`
`for (timeine in timelines) { ... }`

The following methods are provided in addition to the methods that map to the Fictioneers API:

- `getUserId()`
- `setUserId()`

The method `getAccessToken()` is used internally by the SDK, so you shouldn't need to use it, but calling it will give reset and return the access token used by the SDK to call the API.

These methods map to the corresponding methods in the API:

## Admin ##

Admin service to programatically manage timelines and timeline users. A secret API Key is required in the HTTP Authorization header.

- `getTimelines()`
- `getTimeline({timelineId})`
- `getTimelineUsers({timelineId})`
- `deleteTimelineUsers({timelineId})`
- `getTimelineUser({timelineId, userId = null})`
- `deleteTimelineUser({timelineId, userId = null})`
- `getTimelineEventStateChanges({timelineId})`

## Users ##

User from the authentication token.

- `getUser({includeNarrativeState = false})`
- `deleteUser()`
- `updateUser({displayName})`
- `createUser({timelineId, disableTimeGuards = false, pauseAtBeats = false})`
- `getUserStoryState()`
- `progressUserStoryStateEvents({maxSteps = null, pauseAtBeats = true})`

## User timeline hooks ##

Timeline hooks for the authenticated user.

- `getUserTimelineHooks()`

## User interactables ##

Interactables for the authenticated user.

- `getUserInteractables()`
- `getUserInteractable({interactableId}) `
- `updateUserInteractable({interactableId, state})`

##  Timeline interactables ##

All the interactables referenced on the users current timeline (irrespective of their current position).

- `getTimelineInteractables()`
- `getTimelineInteractable({interactableId})`

## Timeline events ##

All the events referenced on the users current timeline (irrespective of their current posiiton).

- `getTimelineEvents()`

For further information on these methods and the parameters, please view [the documentation](https://storage.googleapis.com/fictioneers-developer-docs/build/index.html)