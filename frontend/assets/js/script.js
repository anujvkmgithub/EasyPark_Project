document.getElementById('reservation-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      user_id: 1, 
      // user_id: document.getElementById('user_id').value,
      location: document.getElementById('location').value,
      date: document.getElementById('date').value,
      time: document.getElementById('time').value,
    };
  
    const response = await fetch('http://localhost:4000/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  
    if (response.ok) {
      alert('Reservation successful!');
    } else {
      alert('Failed to reserve. Try again.');
    }
  });
// Update a reservation
document.getElementById('update-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const reservationId = document.getElementById('update-id').value;
  const data = {
      location: document.getElementById('update-location').value,
      date: document.getElementById('update-date').value,
      time: document.getElementById('update-time').value,
      status: 'updated' // Add any status as needed
  };

  const response = await fetch(`${apiUrl}/${reservationId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
  });

  if (response.ok) {
      alert('Reservation updated successfully!');
  } else {
      alert('Failed to update reservation. Try again.');
  }
});

// Retrieve reservations
document.getElementById('get-reservations').addEventListener('click', async () => {
  const response = await fetch(apiUrl);
  const reservations = await response.json();

  const list = document.getElementById('reservations-list');
  list.innerHTML = '';
  reservations.forEach((reservation) => {
      const item = document.createElement('div');
      item.textContent = `ID: ${reservation.id}, Location: ${reservation.location}, Date: ${reservation.date}, Time: ${reservation.time}`;
      list.appendChild(item);
  });
});

// Delete a reservation
document.getElementById('delete-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const reservationId = document.getElementById('delete-id').value;

  const response = await fetch(`${apiUrl}/${reservationId}`, {
      method: 'DELETE',
  });

  if (response.ok) {
      alert('Reservation deleted successfully!');
  } else {
      alert('Failed to delete reservation. Try again.');
  }
});

const apiUrl = 'http://localhost:4000/api/reservations';
  