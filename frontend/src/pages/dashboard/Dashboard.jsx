import React from 'react'

const Dashboard = () => {
  return (
     <div style={descriptionStyles.container}> 
      <h1 style={descriptionStyles.title}>Listados</h1>
      <div style={descriptionStyles.paragraphContainer}>
         
      </div>
    </div>
  )
}

const descriptionStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px', 
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '10px',
  },
  paragraphContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',

  },
  paragraph: {
    fontSize: '16px',
    marginBottom: '10px',
  }, 
};
 
export default Dashboard
