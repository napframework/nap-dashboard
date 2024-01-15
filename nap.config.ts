export default {
  socket: {
    host: 'localhost',
    port: 2000,
    user: 'napuser',
    pass: 'letmein!',
    secure: false,
  },
  portals: [
    {
      id: 'ChoreographyControl',
      name: 'Choreography Control',
      path: 'choreography-control',
    },
    {
      id: 'RobotStatus',
      name: 'Robot Status',
      path: 'robot-status' 
    }
  ],
  layout: {
    showLogin : true
  }
};
