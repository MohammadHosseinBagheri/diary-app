import React, {Component} from 'react';
import {Image, PixelRatio, Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modalbox';
import {
  DANGER_COLOR,
  HOME_FLATLIST_BACKGROUND,
  MAIN_PADDING,
  SUCCESS_COLOR,
} from '../../constant/styles';
export class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: '',
      type: false,
    };
  }
  close = () => {
    this.refs.alertModal.close();
  };
  open = (text = '', type) => {
    this.setState({
      alert: text,
      type,
    });
    this.refs.alertModal.open();
    setTimeout(() => {
      this.close();
    }, 2000);
  };
  render() {
    return (
      <Modal
        position="top"
        backdrop={false}
        ref="alertModal"
        style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <Text style={{color: this.state.type ? SUCCESS_COLOR : DANGER_COLOR}}>
            {this.state.alert}
          </Text>

          <Image
            style={{tintColor: this.state.type ? SUCCESS_COLOR : DANGER_COLOR}}
            source={
              this.state.type
                ? require('../../assets/icons/check.png')
                : require('../../assets/icons/close.png')
            }
          />
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 10,
    height: PixelRatio.get() * 20,
    backgroundColor: HOME_FLATLIST_BACKGROUND,
    borderRadius: 8,
    elevation: 8,
    justifyContent: 'space-between',
    paddingLeft: MAIN_PADDING,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContainer:{backgroundColor: 'transparent', zIndex: 10}
});
export default Alert;
