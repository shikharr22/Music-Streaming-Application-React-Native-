/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumScreen:undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type AlbumType={
  id:string;
  imageUri:string;
  artistsHeadline:string;
};