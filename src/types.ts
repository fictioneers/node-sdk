import { components } from "./openapi";

export type Timeline = components["schemas"]["Timeline"];
export type TimelineEvent = components["schemas"]["TimelineEvent"];
export type User = components["schemas"]["User"];
export type EventStateChange = components["schemas"]["EventStateChange"];
export type UserResponse = components["schemas"]["UserResponse"];
export type UserStoryStateResponse =
  components["schemas"]["UserStoryStateResponse"];
export type UserStoryState = components["schemas"]["UserStoryState"];
export type UserTimelineEventList =
  components["schemas"]["UserTimelineEventListResponse"];
export type UserTimelineEventDetail =
  components["schemas"]["UserTimelineEventDetailResponse"];
export type TokenResponse = components["schemas"]["TokenResponse"];
export type UserTimelineEvent = components["schemas"]["UserTimelineEvent"];
export type ContentIntegration = components["schemas"]["ContentIntegration"];
export type NarrativeEventType = components["schemas"]["NarrativeEventType"];
export type GeneralError = components["schemas"]["GeneralError"];
export type Meta = components["schemas"]["Meta"];
export type Beat = components["schemas"]["Beat"];
export type UserTimelineEventState =
  components["schemas"]["NewUserTimelineEventState"];
export type UserInvokedTimelineEventState =
  components["schemas"]["UserInvokedTimelineEventState"];
export type UserTimelineEventStateChange =
  components["schemas"]["UserTimelineEventStateChange"];
export type ServiceStatus = components["schemas"]["ServiceStatus"];

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
