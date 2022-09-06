import ActivityHeader from "./components/ActivityHeader";
export const applyCustomCode = externalCodeSetup => {
  externalCodeSetup.activitiesScreenApi.setActivityHeaderComponent(props => <ActivityHeader {...props} />)
}