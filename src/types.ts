import { components } from "./openapi";

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
