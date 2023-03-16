from .test_setup import TestSetUp
from ..models import User

class TestViews(TestSetUp):
    def test_user_cannot_register_with_no_data(self):
        res = self.client.post(self.register_url)             
        self.assertEqual(res.status_code,400)        

    def test_user_can_register_correctly(self):
        res = self.client.post(self.register_url,self.user_data, format='json')                   
        self.assertEqual(res.status_code,201)      

    def test_user_can_login(self):
        self.client.post(self.register_url,self.user_data, format='json') 
        res = self.client.post(self.login_url, self.user_data, format='json')        
        self.assertEqual(res.status_code,200)

    def test_user_can_login_and_logout(self):
        register_response = self.client.post(self.register_url,self.user_data, format='json')          
        key = register_response.data['access_token']        
        res = self.client.post(self.logout_url)
        self.assertEqual(res.status_code,200)

    def test_user_can_login_create_child(self):
        self.client.post(self.register_url,self.user_data, format='json') 
        res = self.client.post(self.login_url, self.user_data, format='json')
        self.client.post(self.createlist_child, self.child, format='json')
        self.client.post(self.createlist_child, self.child, format='json')
        self.assertEqual(res.status_code,200)
        child_get = self.client.get(self.createlist_child, format='json')
        child_name = child_get.data[0]['name']
        self.assertEqual(child_name, self.child['name'])

