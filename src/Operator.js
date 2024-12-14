const theOperator = {
	mySqlDbName : 'gtfs_tec',
	gtfsDirectory : './gtfs/tec',
	operator : 'TEC',
	osmOperator : 'TEC',
	networks : [
		{
			osmNetwork : 'TECB',
			gtfsAgencyId : 'B',
			gtfsAgencyName : 'TEC Brabant Wallon'
		},
		{
			osmNetwork : 'TECC',
			gtfsAgencyId : 'C',
			gtfsAgencyName : 'TEC Charleroi'
		},
		{
			osmNetwork : 'TECH',
			gtfsAgencyId : 'H',
			gtfsAgencyName : 'TEC Hainaut'
		},
		{
			osmNetwork : 'TECL',
			gtfsAgencyId : 'L',
			gtfsAgencyName : 'TEC Liège - Verviers'
		},
		{
			osmNetwork : 'TECN',
			gtfsAgencyId : 'N',
			gtfsAgencyName : 'TEC Namur - Luxembourg'
		}
	]
};

export default theOperator;