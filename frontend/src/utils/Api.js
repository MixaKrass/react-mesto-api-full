class Api {
  constructor(confing, {baseUrl} ) {
    this._headers = confing.headers
    this._baseUrl = baseUrl
  }

  _checkError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //получаем список всех карточек
  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-23/cards', {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkError);
  }


  //получаем информацию пользователя
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkError);
  }

  //обновляем аватар
  newAvatar(avatarUrl) {
    const newConfing = {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarUrl['avatar']
      }),

    }
    return fetch(`${this._baseUrl}/users/me/avatar`, newConfing)
    .then(this._checkError);
  }

  // удаляем карточку
  removeCard(cardId) {
    const newConfing = {
      headers: this._headers,
      method: 'DELETE',
    }
    return fetch(`${this._baseUrl}/cards/${cardId}`, newConfing)
    .then(this._checkError);
  }

  // ставим и удаляем лайк
  changeLikeCardStatus(cardId, isLiked) {
    const updateLike = {
      headers: this._headers,
      method: 'PUT',
    }

    const deleteLike = {
      headers: this._headers,
      method: 'DELETE',
    }
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, isLiked ? deleteLike : updateLike)
    .then(this._checkError);
  }

  // отправляем информацию
  patchProfileInfo(userData) {
    const newConfing = {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(userData),
    }
    return fetch(`${this._baseUrl}/users/me`, newConfing)
    .then(this._checkError);
  }

  //создание карточки
  patchCard(inputsValue) {
    const newConfing = {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(inputsValue),

  }
  return fetch(`${this._baseUrl}/cards`, newConfing)
  .then(this._checkError);
}
}

export default new Api ({
  baseUrl: `https://mixakras.nomoredomains.club`,
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
});
