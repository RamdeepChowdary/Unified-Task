// Initialize Firebase
const firebaseConfig = {
    // Your Firebase configuration here
    // Example:
    // apiKey: "YOUR_API_KEY",
    // authDomain: "YOUR_AUTH_DOMAIN",
    // databaseURL: "YOUR_DATABASE_URL",
    // projectId: "YOUR_PROJECT_ID",
    // storageBucket: "YOUR_STORAGE_BUCKET",
    // messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    // appId: "YOUR_APP_ID"
  };
  
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  function bookAppointment() {
    const studentName = document.getElementById('studentName').value;
    const teacherName = document.getElementById('teacherName').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const reason = document.getElementById('reason').value;
    const messageDiv = document.getElementById('message');
  
    if (!studentName || !teacherName || !date || !time || !reason) {
      messageDiv.textContent = "Please fill in all fields.";
      messageDiv.style.color = "red";
      return;
    }
  
    const appointment = {
      studentName: studentName,
      teacherName: teacherName,
      date: date,
      time: time,
      reason: reason
    };
  
    database.ref('appointments/').push(appointment)
      .then(() => {
        messageDiv.textContent = "Appointment booked successfully!";
        messageDiv.style.color = "green";
        document.getElementById('studentName').value = '';
        document.getElementById('date').value = '';
        document.getElementById('time').value = '';
        document.getElementById('reason').value = '';
      })
      .catch((error) => {
        messageDiv.textContent = "Error booking appointment: " + error.message;
        messageDiv.style.color = "red";
      });
  }
