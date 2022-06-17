import VueRouter from 'vue-router'
import Vue from 'vue'

//import Login from '../components/Auth/Login.vue'
import Soumission from '../components/dashboard/soumission/soumission.vue'
import Soumissions from '../components/dashboard/soumission/soumissions.vue'
import Home from '../components/soumissionnaire/home.vue'
import Profile from '../components/soumissionnaire/profile/profile.vue'
import SoumissionSoum from '../components/soumissionnaire/profile/soumissionSou.vue'
import Securite from '../components/soumissionnaire/profile/securite.vue'
import Notifications from '../components/soumissionnaire/profile/notifications.vue'
import Contact from '../components/soumissionnaire/contact.vue'
import Evaluateur from '../components/evaluateur/evaluateur.vue'
import DetailsOffre from '../components/soumissionnaire/detailsOffre.vue'
import SoumissionForm from '../components/soumissionnaire/soumissionForm.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((error) => {
  });
};

const routes = [
/*  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  */
 {
  path: "/soumission",
  name: "Soumission",
  component: Soumission
 },
 {
  path: "/soumissions",
  name: "Soumissions",
  component: Soumissions
 },
 {
  path: "/home",
  name: "Home",
  component: Home
 },
 {
  path: "/profile",
  name: "Profile",
  component: Profile
 },
 {
  path: "/soumissionsoum",
  name: "SoumissionSoum",
  component: SoumissionSoum
 },
 {
  path: "/securite",
  name: "Securite",
  component: Securite
 },
 {
  path: "/notifications",
  name: "Notifications",
  component: Notifications
 },
 {
  path: "/contact",
  name: "Contact",
  component: Contact
 },
 {
  path: "/evaluateur",
  name: "Evaluateur",
  component: Evaluateur
 },
 {
  path: "/detailsOffre",
  name: "DetailsOffre",
  component: DetailsOffre
 },
 {
  path: "/soumissionForm",
  name: "SoumissionForm",
  component: SoumissionForm
 }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router