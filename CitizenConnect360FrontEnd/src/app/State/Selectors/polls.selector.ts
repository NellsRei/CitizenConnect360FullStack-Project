import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PollInterface } from '../Reducers/polls.reducers';

const pollFeatureSelector = createFeatureSelector<PollInterface>('polls');

export const pollsSelector = createSelector(pollFeatureSelector, (state) => state.gettingAllPollsSuccessMessage);
export const pollSelector = createSelector(pollFeatureSelector, (state) => state.gettingAPollSuccessMessage);
export const postByUserSelector = createSelector(pollFeatureSelector, (state)=> state.gettingPollByUserSuccessMessage);



