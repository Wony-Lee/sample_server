### 설명
```
nest CRUD 기본 공부
```

### 설치 및 실행
```
yarn install
yarn start:dev
```

[노션링크](https://dev-wony.notion.site/Library-and-Framework-4380bbe569b244c89b2ca492d9467de2#28299e955d5141709b5adf136344af3a)

```
    study - user service
    
    user service interface
    terminal test
    curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"sample", "email":"sample@naver.com"}'
    curl -X POST http://localhost:3000/users/email-verify\?signupVerifyToken\=test_token
    curl -X POST http://localhost:3000/users/login -H "Content-Type: application/json" -d '{"email": "sample@naver.com", "password":"sample"}'
    curl -X GET http://localhost:3000/users/user-id
```
