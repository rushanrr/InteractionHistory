import { StyleSheet } from "react-native";

export const WHITE = "#fff";
export const BLUE = "#337ab7";
export const DARK_BLUE = "#183147";

const stylesMain = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  containerPadding: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  containerWhite: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: WHITE,
  },
  containerDarkBlue: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: DARK_BLUE,
  },
  containerRow: {
    display: "flex",
    flexDirection: "row",
  },
  containerRowCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  containerVerticalCenter: {
    justifyContent: "space-around",
    padding: 10,
  },
  itemContainerWhite: {
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: WHITE,
  },
  itemContainerBorderLeftDarkBlue: {
    marginBottom: 10,
    paddingLeft: 20,
    borderLeftWidth: 5,
    borderLeftColor: DARK_BLUE,
  },
  itemTitleBigDarkBlue: {
    fontSize: 28,
    color: DARK_BLUE,
  },
  itemTitleSmallBlue: {
    fontSize: 18,
    color: BLUE,
  },
  itemDescrBigDarkBlue: {
    fontSize: 24,
    color: DARK_BLUE,
  },
  itemDescrSmallDarkBlue: {
    fontSize: 16,
    color: DARK_BLUE,
  },
  containerNavTitle: {
    paddingRight: 30,
  },
  stackNavHeaderBigDarkBlue: {
    height: 200,
    backgroundColor: DARK_BLUE,
  },
  navTitle: {
    fontSize: 40,
    textAlign: "center",
    color: WHITE,
  },
  NavDescr: {
    fontSize: 16,
    textAlign: "center",
    color: WHITE,
  },
  imageBackground: {
    flex:1, 
    width: '100%', 
    height: '100%',
  },
  itemImageClient: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: DARK_BLUE,
  },
});

export default stylesMain;
