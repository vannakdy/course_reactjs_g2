
- List teacher 
    url : api/teacher
    param :  {}
    method : GET,
    token : required
- List teacher by id
    url : api/teacher/14
    param :  {}
    method : GET,
    token : required
- Add teacher 
    url : api/teacher/14
    param :  {
        "fname": "Ronaldo",
        "lastname": "Cris",
        "gender": 0,
        "tel": "96666688888",
        "email": "vanak1111@gmail.com",
        "description": "description edit"
    }
    method : POST,
    token : required
- Update teacher 
    url : api/teacher/14
    param :  {
        "teacher_id" : 14,
        "fname": "Ronaldo",
        "lastname": "Cris",
        "gender": 0,
        "tel": "96666688888",
        "email": "vanak1111@gmail.com",
        "description": "description edit"
    }
    method : PUT,
    token : required