import { AuthInterface } from "./Reducers/auth.reducers";
import { IncidentInterface } from "./Reducers/incident.reducers";
import { PollInterface } from "./Reducers/polls.reducers";


export interface AppState{
    auth:AuthInterface,
    polls:PollInterface,
    incidents:IncidentInterface,
}