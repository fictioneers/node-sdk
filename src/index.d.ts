interface AccessTokenResponse {
  accessToken: string
  expiresIn: string
}

type Fictioneers = {
  getAccessToken: () => Promise<AccessTokenResponse>
  setAccessToken: () => Promise<any>;
  _getAuthHeadersBearer: ()=> Promise<any>;
  _doFetch: ({url, method = "GET", auth = "bearer", body = null, additionalHeaders = [], deprecated = false}) => Promise<any>;
  getTimelines: () => Promise<any>;
  getTimeline: ({timelineId}) => Promise<any>;
  getTimelineEvents: ({timelineId}) => Promise<any>;
  getTimelineUsers: ({timelineId}) => Promise<any>;
  deleteTimelineUsers: ({timelineId}) => Promise<any>;
  getTimelineUser: ({timelineId, userId = null}) => Promise<any>;
  deleteTimelineUser: ({timelineId, userId = null}) => Promise<any>;
  getTimelineEventStateChanges: ({timelineId}) => Promise<any>;
  getUser: ({includeNarrativeState = false}) => Promise<any>;
  deleteUser: () => Promise<any>;
  createUser: ({timelineId, disableTimeGuards = false, pauseAtBeats = false}) => Promise<any>;
  initialiseAndProgressUser: ({timelineId, disableTimeGuards = false, pauseAtBeats = false, maxSteps = null}) => Promise<any>;
  getUserStoryState: () => Promise<any>;
  updateUserStoryState: ({currentTimelineEventId}) => Promise<any>;
  progressUserStoryStateEvents: ({maxSteps = null, pauseAtBeats = true}) => Promise<any>;
  getUserTimelineEvents: ()=> Promise<any>;
  updateUserTimelineEvent: ({timelineEventId, state})=> Promise<any>;
  getUserTimelineHooks: () => Promise<any>;
  getUserInteractables: () => Promise<any>;
  getUserInteractable: ({interactableId}) => Promise<any>;
  updateUserInteractable: ({interactableId, state}) => Promise<any>;

  getUserId: () => string
  setUserId: ({ userId }: { userId: string }) => void
  _getAuthHeaderSecretKey: () => any;
}

export {}
export default Fictioneers;