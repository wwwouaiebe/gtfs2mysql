/*
Copyright - 2021 - wwwouaiebe - Contact: https://www.ouaie.be/

This  program is free software;
you can redistribute it and/or modify it under the terms of the
GNU General Public License as published by the Free Software Foundation;
either version 3 of the License, or any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/
/*
Changes:
	- v1.0.0:
		- created
*/
/* ------------------------------------------------------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------------------------------------------------------- */
/**
Start the app:
- read and validate the arguments
- set the config
- remove the old files if any
*/
/* ------------------------------------------------------------------------------------------------------------------------- */

class AppLoader {

	/**
	The constructor
	*/

	constructor ( ) {
		Object.freeze ( this );
	}

	/**
	Load the app, searching all the needed infos to run the app correctly
	@param {?Object} options The options for the app
	*/

	async loadApp ( options ) {
		console.info ( '\nStarting gtfs2mysql ...' );
	}

}

export default AppLoader;

/* --- End of file --------------------------------------------------------------------------------------------------------- */