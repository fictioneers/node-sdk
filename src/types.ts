import { components } from "./openapi";

export type Timeline = components["schemas"]["Timeline"];
export type TimelineEvent = components["schemas"]["TimelineEvent"];
export type User = components["schemas"]["User"];
export type EventStateChange = components["schemas"]["EventStateChange"];
export type UserResponse = components["schemas"]["UserResponse"];
export type UserStoryState = components["schemas"]["UserStoryStateResponse"];
export type UserTimelineEventList =
  components["schemas"]["UserTimelineEventListResponse"];
export type UserTimelineEventDetail =
  components["schemas"]["UserTimelineEventDetailResponse"];
export type TokenResponse = components["schemas"]["TokenResponse"];
export type UserTimelineEvent = components["schemas"]["UserTimelineEvent"];

export interface AccessTokenResponse {
  accessToken: string;
  expiresIn: number;
}

export interface DeleteResponse {
  data: null;
  error: string | null;
  meta: any;
  status: number;
}

export interface InitialiseAndProgressUser {
  userStoryState?: components["schemas"]["UserStoryState"] | null;
  userTimelineEvents: components["schemas"]["UserTimelineEvent"][];
}

export type State = components["schemas"]["UserInvokedTimelineEventState"];
