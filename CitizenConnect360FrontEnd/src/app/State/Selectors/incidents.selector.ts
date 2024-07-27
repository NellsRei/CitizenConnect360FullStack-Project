import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IncidentInterface } from '../Reducers/incident.reducers';

const IncidentFeatureSelector = createFeatureSelector<IncidentInterface>('incident');

export const IncidentsSelector = createSelector(IncidentFeatureSelector, (state) => state.gettingAllIncidentsSuccessMessage);
export const IncidentSelector = createSelector(IncidentFeatureSelector, (state) => state.gettingAnIncidentSuccessMessage);


export const AllpostErrorSelector = createSelector(IncidentFeatureSelector, (state) => state.gettingAllIncidentsErrorMessage);


