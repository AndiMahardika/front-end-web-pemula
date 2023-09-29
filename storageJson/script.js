function checkForStorage() {
    return typeof (Storage) !== 'undefined';
}

function putUserList(data) {
    if (checkForStorage()) {
      let userData = [];
      if (localStorage.getItem(storageKey) !== null) {
        userData = JSON.parse(localStorage.getItem(storageKey));
      }
      userData.unshift(data);
      if (userData.length > 5) {
        userData.pop();
      }
      localStorage.setItem(storageKey, JSON.stringify(userData));   
    }
}

function getUserList() {
    if (checkForStorage()) {
      return JSON.parse(localStorage.getItem(storageKey)) || [];
    } else {
      return [];
    }
}

function renderUserList() {
    const userData = getUserList();
    const userList = document.querySelector('#user-list-detail');
    userList.innerHTML = '';
    for (let user of userData) {
      let row = document.createElement('tr');
      row.innerHTML = '<td>' + user.nama + '</td>';
      row.innerHTML += '<td>' + user.umur + '</td>';
      row.innerHTML += '<td>' + user.domisili + '</td>';
      userList.appendChild(row);
    }
}
