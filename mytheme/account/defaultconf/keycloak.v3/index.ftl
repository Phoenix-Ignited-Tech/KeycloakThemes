<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <base href="${resourceUrl}/" />
    <link rel="icon" type="${properties.favIconType!"image/svg+xml"}" href="${resourceUrl}${properties.favIcon!"/favicon.svg"}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${properties.description!"Web site to manage keycloak"}" />
    

    <title>${properties.title!"Account Management"}</title>
    <script type="importmap">
      {
        "imports": {
          "react": "${resourceCommonUrl}/vendor/react/react.production.min.js",
          "react/jsx-runtime": "${resourceCommonUrl}/vendor/react/react-jsx-runtime.production.min.js",
          "react-dom": "${resourceCommonUrl}/vendor/react-dom/react-dom.production.min.js"
        }
      }
    </script>

    <style>
      body {
        margin: 0;
      }

      body, #app {
        height: 100%;
      }

      .container {
        padding: 0;
        margin: 0;
        width: 100%;
      }

      .keycloak__loading-container {
        height: 100vh;
        width: 100%;
        background-color: #f0f0f0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 0;
      }

      #loading-text {
        z-index: 1000;
        font-size: 20px;
        font-weight: 600;
        padding-top: 32px;
      }
    </style>
    <script type="module" crossorigin src="${resourceUrl}/assets/index-VySmYGoG.js"></script>
    <link rel="stylesheet" crossorigin href="${resourceUrl}/assets/index-zNSMD62g.css">
  

    <#if properties.scripts?has_content>
      <#list properties.scripts?split(' ') as script>
        <script src="${resourceUrl}/${script}"></script>
      </#list>
    </#if>
    <#if properties.styles?has_content>
      <#list properties.styles?split(' ') as style>
      <link href="${resourceUrl}/${style}" rel="stylesheet"/>
      </#list>
    </#if>
  </head>


  <body>
    <div id="app">
      <main class="container">
        <div class="keycloak__loading-container">
          <span class="pf-c-spinner pf-m-xl" role="progressbar" aria-valuetext="Loading...">
            <span class="pf-c-spinner__clipper"></span>
            <span class="pf-c-spinner__lead-ball"></span>
            <span class="pf-c-spinner__tail-ball"></span>
          </span>
          <div>
            <p id="loading-text">Loading the account console</p>
          </div>
        </div>
      </main>
    </div>

    <noscript>You need to enable JavaScript to run this app.</noscript>
  

  <script id="environment" type="application/json">
    {
      "authUrl": "${authUrl}",
      "authServerUrl": "${authServerUrl}",
      "realm": "${realm.name}",
      "clientId": "${clientId}",
      "resourceUrl": "${resourceUrl}",
      "logo": "${properties.logo!""}",
      "logoUrl": "${properties.logoUrl!""}",
      "baseUrl": "${baseUrl}",
      "locale": "${locale}",
      "referrerName": "${referrerName!""}",
      "referrerUrl": "${referrer_uri!""}",
      "features": {
        "isRegistrationEmailAsUsername": ${realm.registrationEmailAsUsername?c},
        "isEditUserNameAllowed": ${realm.editUsernameAllowed?c},
        "isInternationalizationEnabled": ${realm.isInternationalizationEnabled()?c},
        "isLinkedAccountsEnabled": ${realm.identityFederationEnabled?c},
        "isMyResourcesEnabled": ${(realm.userManagedAccessAllowed && isAuthorizationEnabled)?c},
        "deleteAccountAllowed": ${deleteAccountAllowed?c},
        "updateEmailFeatureEnabled": ${updateEmailFeatureEnabled?c},
        "updateEmailActionEnabled": ${updateEmailActionEnabled?c},
        "isViewGroupsEnabled": ${isViewGroupsEnabled?c},
        "isOid4VciEnabled": ${isOid4VciEnabled?c}
      }
    }
  </script>
</body>


</html>
