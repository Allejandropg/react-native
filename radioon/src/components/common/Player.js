import React from 'react'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity} from 'react-native';

const Player = ({showplayer }) =>{
  const currentTimeString = getAudioTimeString(playSeconds);
  const durationString = getAudioTimeString(duration);
	return (
      
				<ImageBackground source={require("../images/bg-player.png")} style={styles.bgPlayer}>
					<View style={{ flex: 1, padding: 20 }}>
						<Text style={styles.textPlayer}>{playerTitle}</Text>
						<Text style={styles.descPlayer}>{playerDesc}</Text>
					</View>

					<View style={{ flex: 2, position: 'absolute', right: 20, top: 20 }}>
						<TouchableOpacity onPress={ onPressButtonPlayPause.bind(this)}>
							<Icon name={pause ? 'play' : 'pause'} size={36} color="#fff" />
						</TouchableOpacity>
					</View>

					<View style={{ flex: 1 }}>
						<Slider
							style={{ width: '100%', position: 'absolute', justifyContent: 'center' }}
							maximumValue={duration}
							minimumTrackTintColor="#01568d"
							maximumTrackTintColor="#fff"
							thumbTintColor="#fff"
							value={playSeconds}
							//onValueChange={ val =>  setState({ playSeconds: val }) }
							//onValueChange={(playSeconds) => setState({playSeconds:playSeconds})}    
							onValueChange={ change.bind(this)}
							step={1}
						/>
						<View style={styles.descSliderPlayer}>
							<Text style={[styles.durationSliderPlayer, { right: 15 }]}>{durationString}</Text>
							<Text style={[styles.durationSliderPlayer, { left: 15 }]}>{currentTimeString}</Text>
						</View>
					</View>
				</ImageBackground>
  );
}

const styles = StyleSheet.create({
	/*PLAYER*/
	textPlayer: {
		color: '#fff',
		fontSize: 16,
		fontFamily: 'Lato Regular',
	},

	descPlayer: {
		marginTop: 5,
		color: '#f9b9c1',
		fontSize: 14,
		fontFamily: 'Lato Regular',
	},

	bgPlayer: {
		height: 150,
		width: '100%',
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		flex: 1,
	},

	descSliderPlayer: {
		position: 'relative',
		alignItems: "center",
		marginTop: 20,
		flexDirection: 'row',
		paddingHorizontal: 20,
	},

	durationSliderPlayer: {
		color: 'white',
		alignItems: 'center',
		position: 'absolute',
		top: 1
	},
});