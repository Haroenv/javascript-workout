module.exports = (function(){
	
	var Constants = {
		GO_TO_PREVIOUS_SLIDE : 'goToPreviousSlide',
		GO_TO_NEXT_SLIDE : 'goToNextSlide',
		SET_CURRENT_SLIDE_INDEX : 'setCurrentSlideIndex',

		ROLE_PRESENTATION : 'presentation',
		ROLE_MOBILE : 'mobile',

		STATE_ACTIVE : 'active',
		STATE_INACTIVE : 'inactive',

		SET_SUBSTATE : 'setSubstate',

		SHAKE_YOUR_PHONES_INTRO : 'shakeYourPhonesIntro',
		SHAKE_YOUR_PHONES_GAME : 'shakeYourPhonesGame',
		SHAKE_YOUR_PHONES_FINISHED : 'shakeYourPhonesFinished',

		HIGHEST_HEARTRATE_GAME_INTRO : 'highestHeartrateGameIntro',
		HIGHEST_HEARTRATE_GAME_GAME : 'highestHeartrateGameGame',
		HIGHEST_HEARTRATE_GAME_FINISHED : 'highestHeartrateGameFinished',

		UPDATE_MAXIMUM_MOTION : 'updateMaximumMotion',
		HEART_RATE_SPARK : 'heartRateSpark'
	};

	return Constants;

})();