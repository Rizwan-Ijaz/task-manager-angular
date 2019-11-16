export interface NavigationModel {
  name: string;
  icon?: string;
  route?: string;
  children?: NavigationModel[];
}
