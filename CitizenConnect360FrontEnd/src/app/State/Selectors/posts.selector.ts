import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostInterface } from '../Reducers/post.reducers';

const postFeatureSelector = createFeatureSelector<PostInterface>('posts');

export const postsSelector = createSelector(postFeatureSelector, (state) => state.gettingAllPostsSuccessMessage);
export const postSelector = createSelector(postFeatureSelector, (state) => state.gettingAPostSuccessMessage);
export const postByUserSelector = createSelector(postFeatureSelector, (state)=> state.gettingPostByUserSuccessMessage);


export const AllpostErrorSelector = createSelector(postFeatureSelector, (state) => state.gettingAllPostsErrorMessage);


