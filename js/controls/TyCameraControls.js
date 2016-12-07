/**
 * @author WaterTian / https://github.com/WaterTian
 *
 */

THREE.TyCameraControls = function ( object ) {

	var scope = this;

	this.object = object;
	this.object.rotation.reorder( "YXZ" );
	this.freeze = true;
	this.deviceOrientation = {};
	this.screenOrientation = 0;

	var isUserInteracting = false,
	onMouseDownMouseX = 0, onMouseDownMouseY = 0,
	lon = 0, onMouseDownLon = 0,
	lat = 0, onMouseDownLat = 0,
	phi = 0, theta = 0;


	var onDeviceOrientationChangeEvent = function ( event ) {

		scope.deviceOrientation = event;
	};

	var onScreenOrientationChangeEvent = function () {

		scope.screenOrientation = window.orientation || 0;
	};


    var touchstart = function ( event ) {
		switch ( event.touches.length ) 
		{
			case 1:	// one-fingered touch: rotate
				isUserInteracting = true;
				onPointerDownPointerX = event.touches[ 0 ].pageX;
				onPointerDownPointerY = event.touches[ 0 ].pageY;
				onPointerDownLon = lon;
				onPointerDownLat = lat;
				break;
		}
	};
	var touchmove = function( event ){
		switch ( event.touches.length ) 
		{
			case 1:	// one-fingered touch: rotate
				if ( isUserInteracting === true ) {
					lon = ( onPointerDownPointerX - event.touches[ 0 ].pageX ) * 0.1 + onPointerDownLon;
					lat = ( event.touches[ 0 ].pageY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;
				}
				break;
		}
	};

	var touchend = function ( /* event */ ) {
	    isUserInteracting = false;
	};


	var onDocumentMouseDown = function ( event ) {
		event.preventDefault();
		isUserInteracting = true;
		onPointerDownPointerX = event.clientX;
		onPointerDownPointerY = event.clientY;
		onPointerDownLon = lon;
		onPointerDownLat = lat;
	};

	var onDocumentMouseMove = function ( event ) {
		if ( isUserInteracting === true ) {
			lon = ( onPointerDownPointerX - event.clientX ) * 0.1 + onPointerDownLon;
			lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;
		}
	};

	var onDocumentMouseUp = function ( event ) {
		isUserInteracting = false;
	};




	// The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

	var setObjectQuaternion = function () {

		var zee = new THREE.Vector3( 0, 0, 1 );

		var euler = new THREE.Euler();

		var q0 = new THREE.Quaternion();

		var q1 = new THREE.Quaternion( - Math.sqrt( 0.5 ), 0, 0, Math.sqrt( 0.5 ) ); // - PI/2 around the x-axis

		return function ( quaternion, alpha, beta, gamma, orient ) {

			euler.set( beta, alpha, - gamma, 'YXZ' );                       // 'ZXY' for the device, but 'YXZ' for us

			quaternion.setFromEuler( euler );                               // orient the device

			quaternion.multiply( q1 );                                      // camera looks out the back of the device, not the top

			quaternion.multiply( q0.setFromAxisAngle( zee, - orient ) );    // adjust for screen orientation

		}

	}();

	this.connect = function() {

		onScreenOrientationChangeEvent(); // run once on load
		window.addEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
		window.addEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );

		document.addEventListener( 'touchstart', touchstart, false );
		document.addEventListener( 'touchend', touchend, false );
		document.addEventListener( 'touchmove', touchmove, false );

		document.addEventListener( 'mousedown', onDocumentMouseDown, false );
		document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		document.addEventListener( 'mouseup', onDocumentMouseUp, false );

		scope.freeze = false;
	};

	this.disconnect = function() {

		scope.freeze = true;

		window.removeEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
		window.removeEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );

		document.removeEventListener( 'touchstart', touchstart, false );
		document.removeEventListener( 'touchend', touchend, false );
		document.removeEventListener( 'touchmove', touchmove, false );

		document.removeEventListener( 'mousedown', onDocumentMouseDown, false );
		document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
		document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	};

	this.update = function () {

		if ( scope.freeze ) return;

		if ( isUserInteracting === false ) 
		{
			var alpha  = scope.deviceOrientation.gamma ? THREE.Math.degToRad( scope.deviceOrientation.alpha ) : 0; // Z
			var beta   = scope.deviceOrientation.beta  ? THREE.Math.degToRad( scope.deviceOrientation.beta  ) : 0; // X'
			var gamma  = scope.deviceOrientation.gamma ? THREE.Math.degToRad( scope.deviceOrientation.gamma ) : 0; // Y''
			var orient = scope.screenOrientation       ? THREE.Math.degToRad( scope.screenOrientation       ) : 0; // O

			if(alpha!=0 || beta!=0 || gamma!=0)
			{
				setObjectQuaternion( scope.object.quaternion, alpha, beta, gamma, orient );
			}

		}else{
			
			lat = Math.max( - 85, Math.min( 85, lat ) );
			phi = THREE.Math.degToRad( 90 - lat );
			theta = THREE.Math.degToRad( lon );

			camera.target.x = 500 * Math.sin( phi ) * Math.cos( theta );
			camera.target.y = 500 * Math.cos( phi );
			camera.target.z = 500 * Math.sin( phi ) * Math.sin( theta );
			camera.lookAt( camera.target );
		}

	};

};
