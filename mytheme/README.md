A simple theme template for keycloak, customize to your heart's content and enjoy!
<br></br>Full docs coming soon but for now some important notes:<br></br>
<ul>
  <li>Keycloak themes are designed to build off of eachother you do not need to create an entire theme from scratch</li>
  <li>Themes reside in the themes directory which is in the root of the keycloak directory for instance: `/opt/keycloak/themes/mytheme_name` </li>
  <li>Keycloak ships with 4 main themes: base, keycloak, keycloak.v2, and keycloak.v3</li>
  <li>The base theme is just html no design at all</li>
  <li>There are 5 "areas" of keycloak that you can theme. Different themes are available in different areas. The "areas" are login (login-register pages), account (user account area), admin (admin area), email (emails that keycloak sends), and the welcome page, we will ignore the welcome page.</li>
  <li>Each "area" has a default theme: login: keycloak | account: keycloak.v3 | email: base | admin: keycloak.v2 </li>
  <li>You will see a "common" "sub-theme" if you will. This contains many of the underlying stylizations / dependencies that the keycloak, keycloak.v2, and keycloak.v3 themes depend on.</li>
  <li>The main theme files that we will build off of can be found at `/opt/keycloak/lib/lib/main/org.keycloak.keycloak-account-ui-x.x.x.jar`, `/opt/keycloak/lib/lib/main/org.keycloak.keycloak-admin-ui-x.x.x.jar`, and `/opt/keycloak/lib/lib/main/org.keycloak.keycloak-themes-x.x.x.jar` x.x.x being the version number.</li>
    </ul>


