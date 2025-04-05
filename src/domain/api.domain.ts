export interface QueryOptions {
  showSuccess?: boolean;
  showError?: boolean;
  enabled?: boolean;
  mutationKey?: string[];
}

export interface QueryParams<T = object> extends QueryOptions {
  params?: T;
}

export interface QueryBody<T = object> extends QueryOptions {
  body?: T;
}

export interface QueryId extends QueryOptions {
  id?: string;
}
