# Okta Integration

## Identity Synchronization

### Is UEM Required and ACC Deployed?

- Yes - Connected to AD

	- Do you require Horizon/Citrix Support?

		- Yes

			- Deploy WS1 Access Connector 19.03

		- No

			- Do you Require any of the following?
 Radius/RSA/IWA Authentication?
 PeopleSearch?
 Multiple AD Domains?
 Flexible Synch for User? Subset and/or Schedule.

				- Yes

					- Deploy WS1 Access Connector 20.01

						- https://docs.vmware.com/en/VMware-Workspace-ONE-Access/19.03/identitymanager-connector-win/GUID-06085CBA-AF2C-41B6-B2E3-DA65212BAABF.html

				- No

					- Enable Basic User Sync for IDM in UEM 

					  Implications:
					  No Virtual Application Support
					  No People Search Support
					  Limited Single AD Domain
					  Full Sync of UEM Users
					  
					  https://docs.vmware.com/en/VMware-Workspace-ONE/services/intelligent-hub_IDM/GUID-23C80827-F262-4098-A32D-D1CFD7FA4AAE.html?hWord=N4IghgNiBcIEZgM4EsDGACArogpgJ3UQE8A7VEAXyA

- Yes - Connected to Okta LDAP

	- Configure SCIM Integration 

- No - Greenfield Opportunity

	- Do you Require Horizon/Citrix?

		- Yes

			- Deploy WS1 Access Connector 19.03

				- https://docs.vmware.com/en/VMware-Workspace-ONE-Access/19.03/identitymanager-connector-win/GUID-06085CBA-AF2C-41B6-B2E3-DA65212BAABF.html

		- No

			- Do you Require any of the following?
 Advanced Authentication?
 PeopleSearch?
 Multiple AD Domains?
 Flexible Synch for User? Subset and/or Schedule?

				- Yes

					- Deploy WS1 Access Connector 20.01

						- https://docs.vmware.com/en/VMware-Workspace-ONE-Access/19.03/identitymanager-connector-win/GUID-06085CBA-AF2C-41B6-B2E3-DA65212BAABF.html

				- No

					- Configure SCIM Integration 

					  Note - Horizon/Citrix and PeopleSearch is Not Supported.
					  
					  https://communities.vmware.com/blogs/steveIDM/2019/08/13/workspace-one-okta-integration-part-3-setting-up-scim-provisioning

- No - Horizon ONLY

	- Deploy WS1 Access Connector 19.03

		- https://docs.vmware.com/en/VMware-Workspace-ONE-Access/19.03/identitymanager-connector-win/GUID-06085CBA-AF2C-41B6-B2E3-DA65212BAABF.html

## Device Enrollment

### Do you require Token or QR Codes for enrollment?

- Yes

	- Configure Authentication in UEM

	  https://docs.vmware.com/en/VMware-Workspace-ONE-UEM/services/ProdProv_All/GUID-F1274AF3-1D9A-4579-A2D9-201755A43AAC.html?hWord=N4IghgNiBcIO4HsBOBrAzgBzAYwKYAIEA7AgRyX2wQBNcQBfIA

- No

	- Do you require Okta Credentials to enroll?

		- Yes

			- Configure 3rd Party IDP in WS1 Access in Default Policy

			  https://techzone.vmware.com/integrating-okta-vmware-workspace-one-operational-tutorial#965471

		- No

			- Is WS1 Access Connector Installed?

				- Yes

					- Is WS1 Access Setup for Password Auth?

						- Yes

							- Is Okta Verify Required for Enrollment?

								- Yes

									- Configure 3rd Party IDP in WS1 Access in Default Policy

									  https://techzone.vmware.com/integrating-okta-vmware-workspace-one-operational-tutorial#965471

								- No

									- Configure Password (Cloud Deployment + MFA)

									  https://docs.vmware.com/en/VMware-Workspace-ONE-Access/20.01/ws1_access_authentication/GUID-894D10F2-EF05-4672-8C4A-7D88A36CDF37.html

						- No

							- Configure 3rd Party IDP in WS1 Access in Default Policy

							  https://techzone.vmware.com/integrating-okta-vmware-workspace-one-operational-tutorial#965471

				- No

					- Configure 3rd Party IDP in WS1 Access in Default Policy

					  https://techzone.vmware.com/integrating-okta-vmware-workspace-one-operational-tutorial#965471

## Conditional Access
-Device Trust-

### Do you require devices to be Managed to Access SAAS Resources on IOS /Android?

- Yes

	- Do you want to check for device compliance during authentication?

		- Yes

		  All Authentication Failures will be handled by Workspace ONE Access. Error Messages can be configured in the Workspace ONE Access Policies.

			- Configure Routing Rules

			  https://techzone.vmware.com/integrating-okta-vmware-workspace-one-operational-tutorial#965469

			- Disable Device Trust in Okta (If Enabled)

			  https://communities.vmware.com/blogs/steveIDM/2019/10/02/adding-okta-device-trust-for-mac-windows-with-workspace-one

			- Enable Device Compliance in WS1 Access

			  https://communities.vmware.com/blogs/steveIDM/2019/10/02/adding-okta-device-trust-for-mac-windows-with-workspace-one

			- Disable Send Failure Notification & Force AuthN 

			  https://communities.vmware.com/blogs/steveIDM/2019/10/02/adding-okta-device-trust-for-mac-windows-with-workspace-one

		- No

			- Do you want to use WS1 Risk Scoring?

				- Yes

					- Configure Routing Rules

					  https://techzone.vmware.com/integrating-okta-vmware-workspace-one-operational-tutorial#965469

					- Disable Device Trust in Okta (If Enabled)

					  https://communities.vmware.com/blogs/steveIDM/2019/10/02/adding-okta-device-trust-for-mac-windows-with-workspace-one

					- Integrate WS1 Intelligence & WS1 Access

					  https://docs.vmware.com/en/VMware-Workspace-ONE/services/Intelligence/GUID-AWT-WS1INT-REGISTER-VIDM.html

					- Enable Device Compliance and Risk Scoring in WS1 Access

					  https://docs.vmware.com/en/VMware-Workspace-ONE-Access/services/ws1_access_authentication_cloud/GUID-BE16CF6C-A02F-4C35-B373-A48200548875.html

					- Disable Send Failure Notification & Force AuthN in WS1 Access

					  https://communities.vmware.com/blogs/steveIDM/2019/10/02/adding-okta-device-trust-for-mac-windows-with-workspace-one

				- No

					- Enable Okta Device Trust for WS1

					  https://communities.vmware.com/blogs/steveIDM/2019/08/15/workspace-one-okta-integration-part-4-device-trust

					- Configure Routing Rules

					  https://techzone.vmware.com/integrating-okta-vmware-workspace-one-operational-tutorial#965469

					- Enable Send Failure Notification & Force AuthN 

					  https://communities.vmware.com/blogs/steveIDM/2019/08/15/workspace-one-okta-integration-part-4-device-trust

					- Add Device Trust Sign-On Policies in Okta

					  https://communities.vmware.com/blogs/steveIDM/2019/08/15/workspace-one-okta-integration-part-4-device-trust

- No

	- No Further Work Required

### Do you require devices to be Managed to Access SAAS Resources on Win10/MacOS?

- Yes

	- Configure Routing Rules

	  https://techzone.vmware.com/integrating-okta-vmware-workspace-one-operational-tutorial#965469

	- Enable Device Compliance

	  https://communities.vmware.com/blogs/steveIDM/2019/10/02/adding-okta-device-trust-for-mac-windows-with-workspace-one

	- Disable Send Failure Notification & Force AuthN 

	  https://communities.vmware.com/blogs/steveIDM/2019/10/02/adding-okta-device-trust-for-mac-windows-with-workspace-one

- No

	- No Further Work Required

## MultiFactor
Authentication

### Do you require MFA on Unmanaged Android/IOS?

- Yes

	- Is Okta Device Trust for WS1 Enabled? (See Conditional Access Flow)

		- Yes

			- Configure MFA in Okta Sign-On Policy

			  See Okta Documentation

		- No

			- Configure MFA in WS1 Access Policy

			  TBD

- No

	- No Further Work Required

### Do you require MFA on Unmanaged MacOS/Win10?

- Yes

	- Configure MFA in WS1 Access Policy

	  TBD

- No

	- No Further Work Required

## Unified Catalog

### Do you want to provide Unified App Catalog (Native, VID and Okta Federated)?

- Yes

	- Add Okta API Key to WS1 Configuration

	  https://communities.vmware.com/blogs/steveIDM/2019/05/08/workspace-one-okta-integration-part-2-unified-digital-workspace

- No

	- Users will use WS1 for Native/VID and Okta for SAAS

### Do you have Okta SWA Apps?

- Yes

	- Users will use Okta for SWA Apps

- No

	- No Further Work Required

