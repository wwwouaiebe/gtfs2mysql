/*
Copyright - 2023 - wwwouaiebe - Contact: https://www.ouaie.be/

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

import TableLoader from './TableLoader.js';

/* ------------------------------------------------------------------------------------------------------------------------- */
/**
 * Coming soon...
 */
/* ------------------------------------------------------------------------------------------------------------------------- */

class AgencyTableLoader extends TableLoader {

	/**
     * Coming soon...
     * @type {string}
     */

	get tableName ( ) { return 'agency'; }

	/**
     * The cosntructor
     */

	constructor ( ) {
		super ( );
		this.fieldsMap.set (
			'agency_id',
			{
				name : 'agency_id',
				type : 'varchar',
				length : TableLoader.VARCHAR_LENGHT_64
			}
		);
		this.fieldsMap.set (
			'agency_name',
			{
				name : 'agency_name',
				type : 'varchar',
				length : TableLoader.VARCHAR_LENGHT_64
			}
		);
		this.fieldsMap.set (
			'agency_url',
			{
				name : 'agency_url',
				type : 'varchar',
				length : TableLoader.VARCHAR_LENGHT_256
			}
		);
		this.fieldsMap.set (
			'agency_timezone',
			{
				name : 'agency_timezone',
				type : 'varchar',
				length : TableLoader.VARCHAR_LENGHT_64
			}
		);
		this.fieldsMap.set (
			'agency_lang',
			{
				name : 'agency_lang',
				type : 'varchar',
				length : TableLoader.VARCHAR_LENGHT_5
			}
		);
		this.fieldsMap.set (
			'agency_phone',
			{
				name : 'agency_phone',
				type : 'varchar',
				length : TableLoader.VARCHAR_LENGHT_64
			}
		);
		this.fieldsMap.set (
			'agency_fare_url',
			{
				name : 'agency_fare_url',
				type : 'varchar',
				length : TableLoader.VARCHAR_LENGHT_256
			}
		);
		this.fieldsMap.set (
			'agency_email',
			{
				name : 'agency_email',
				type : 'varchar',
				length : TableLoader.VARCHAR_LENGHT_256
			}
		);
		Object.freeze ( this );
	}

	/**
     * Coming soon...
     */

	async createIndexes ( ) {
	}

}

export default AgencyTableLoader;

/* --- End of file --------------------------------------------------------------------------------------------------------- */