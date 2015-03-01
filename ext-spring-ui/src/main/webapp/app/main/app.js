Ext.define('Menu', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'name',
		type : 'string'
	}, {
		name : 'parent',
		type : 'string'
	}, {
		name : 'leaf',
		type : 'boolean'
	}, {
		name : 'expanded',
		type : 'boolean'
	}, {
		name : 'description',
		type : 'string'
	} ]
});

var myStore = Ext.create('Ext.data.TreeStore', {
	model : 'Menu',
	root : {
		name : 'Students Data Center',
		expanded : true,
		leaf : false,
		children : [ {
			name : "Academic",
			children : [ {
				name : "transcripts",
				leaf : true
			}, {
				name : "Study Progress",
				leaf : true
			}, {
				name : "Study Planning",
				leaf : true
			}, {
				name : "Intership",
				leaf : true
			}, {
				name : "Billing Information",
				leaf : true
			} ]
		}, {
			name : "Student",
			children : [ {
				name : "Register New Student",
				leaf : true
			}, {
				name : "Student Monitoring",
				leaf : true
			}, {
				name : "Stop Out",
				leaf : true
			}, {
				name : "Drop Out",
				leaf : true
			}, {
				name : "Quisioner",
				leaf : true
			}, {
				name : "Exam",
				leaf : true
			}, {
				name : "Announcement",
				leaf : true
			} ]
		}, {
			name : "Faculties",
			children : [ {
				name : "Register Faculties",
				leaf : true
			}, {
				name : "Achievement",
				leaf : true
			}, {
				name : "Monitoring Faculties",
				leaf : true
			}, {
				name : "Alumnus",
				leaf : true
			} ]
		}, {
			name : "Lecturer",
			children : [ {
				name : "Class",
				leaf : true
			}, {
				name : "Subject",
				leaf : true
			}, {
				name : "Exam Result",
				leaf : true
			} ]
		}, {
			name : "Scholarship",
			children : [ {
				name : "Chennai",
				leaf : true
			}, {
				name : "Delhi",
				leaf : true
			}, {
				name : "Mumbai",
				leaf : true
			} ]
		}, {
			name : "Administration",
			children : [ {
				name : "Menu",
				leaf : true
			}, {
				name : "User",
				leaf : true
			}, {
				name : "Role",
				leaf : true
			}, {
				name : "Menu Authorization",
				leaf : true
			} ]
		}, {
			name : "Report",
			children : [ {
				name : "Student",
				leaf : true
			}, {
				name : "Lecturer",
				leaf : true
			}, {
				name : "Faculty",
				leaf : true
			} ]
		} ]
	}
});


var tpanel = new Ext.create('Ext.tree.Panel', {
	height : 100,
	width : 250,
	region : 'west',
	hideHeaders : true,
	collapsible : true,
	split : true,
	columns : [ {
		dataIndex : 'name',
		flex : 1,
		xtype : 'treecolumn'
	} ],
	// store : {
	// model : 'Menu',
	// root : {
	// name : 'Student Data Center',
	// children : [ {
	// name : 'Gavin Renaldi',
	// children : [ {
	// name : 'Benar Sekali',
	// age : 2,
	// children : []
	// } ]
	// }, {
	// name : 'Gavin Ripharbowo',
	// children : []
	// } ]
	// }
	// },
	store : myStore,
	viewConfig : {
		plugins : {
			ddGroup : 'user-dd',
			ptype : 'treeviewdragdrop'
		}
	}
});

/* global Ext:false */
Ext
		.onReady(function() {
			Ext
					.create(
							'Ext.container.Viewport',
							{
								layout : 'border',
								items : [
										{
											region : 'north',
											html : '<div class="panel-header"><h3 id="app-title">Students Data Center</h3></div>',
											border : false,
											margins : '0 0 5 0'
										}, tpanel, {
											region : 'south',
											title : 'South Panel',
											collapsible : true,
											html : 'Information goes here',
											split : true,
											height : 100,
											minHeight : 100
										}, {
											region : 'east',
											title : 'East Panel',
											collapsible : true,
											split : true,
											width : 150
										}, {
											region : 'center',
											xtype : 'tabpanel',
											// TabPanel itself has no title
											activeTab : 0,
										// First tab active by default
										// items : {
										// title : 'Default Tab',
										// html : 'The first tab\'s content.
										// Others may be added dynamically'
										// }
										} ]
							});
		});
