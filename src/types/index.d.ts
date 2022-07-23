export interface IssueItemUserType {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface IssueItemLabelType {
  id: number
  node_id: string
  url: string
  name: string
  color: string
  default: boolean
  description: string
}

export interface IssueItemReactionsType {
  url: string
  total_count: number
  "+1": number
  "-1": number
  laugh: number
  hooray: number
  confused: number
  heart: number
  rocket: number
  eyes: number
}

export interface IssueItemType {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: IssueItemUserType
  labels: IssueItemLabelType[]
  state: string
  locked: false
  assignee: null
  assignees: []
  milestone: null
  comments: number
  created_at: Date
  updated_at: Date
  closed_at: Date
  author_association: string
  active_lock_reason: null
  body: string
  reactions: IssueItemReactionsType
  timeline_url: string
  performed_via_github_app: null
  state_reason: null
}

export interface SuccessIssueItemType {
  number: number
  title: string
  createdAt: Date
  comments: number
}

export interface ErrorIssueItemType {
  message: string
  documentation_url: string
}
