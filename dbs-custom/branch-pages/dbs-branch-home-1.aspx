<%-- SPG:

This HTML file has been associated with a SharePoint Page Layout (.aspx file) carrying the same name.  While the files remain associated, you will not be allowed to edit the .aspx file, and any rename, move, or deletion operations will be reciprocated.

To build the page layout directly from this HTML file, simply fill in the contents of content placeholders.  Use the Snippet Generator at https://connect.daugherty.com/sites/teams/_layouts/15/ComponentHome.aspx?Url=https%3A%2F%2Fconnect%2Edaugherty%2Ecom%2Fsites%2Fteams%2F%5Fcatalogs%2Fmasterpage%2Fdbs%2Dcustom%2Fbranch%2Dpages%2Fdbs%2Dbranch%2Dhome%2D1%2Easpx to create and customize additional content placeholders and other useful SharePoint entities, then copy and paste them as HTML snippets into your HTML code.   All updates to this file within content placeholders will automatically sync to the associated page layout.

 --%>
<%@Page language="C#" Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage, Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="PageFieldFieldValue" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="Publishing" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="PageFieldRichImageField" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="PageFieldNoteField" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="a2e8ead9d" Namespace="Microsoft.Office.Server.Search.WebControls" Assembly="Microsoft.Office.Server.Search, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@Register TagPrefix="spsswc" Namespace="Microsoft.Office.Server.Search.WebControls" Assembly="Microsoft.Office.Server.Search, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content runat="server" ContentPlaceHolderID="PlaceHolderPageTitle">
            <SharePoint:ProjectProperty Property="Title" runat="server">
            </SharePoint:ProjectProperty>
            
            
            <PageFieldFieldValue:FieldValue FieldName="fa564e0f-0c70-4ab9-b863-0177e6ddd247" runat="server">
            </PageFieldFieldValue:FieldValue>
            
        </asp:Content><asp:Content runat="server" ContentPlaceHolderID="PlaceHolderAdditionalPageHead">
            
            
            
            <link href="/sites/teams/_catalogs/masterpage/dbs-custom/Styles/bootstrap-grid/bootstrap.min.css" rel="stylesheet" type="text/css" />
            <link href="/sites/teams/_catalogs/masterpage/dbs-custom/branch-pages/app/css/dbs-branches.css" rel="stylesheet" type="text/css" />            
            <script type="text/javascript" data-main="/sites/teams/_catalogs/masterpage/dbs-custom/branch-pages/app/config-require" src="/sites/teams/_catalogs/masterpage/dbs-custom/Scripts/lib/require/require.min.js">//<![CDATA[//]]></script>
            <Publishing:EditModePanel runat="server" id="editmodestyles">
                <SharePoint:CssRegistration name="&lt;% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %&gt;" After="&lt;% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %&gt;" runat="server">
                </SharePoint:CssRegistration>
            </Publishing:EditModePanel>
            
        </asp:Content><asp:Content runat="server" ContentPlaceHolderID="PlaceHolderBodyAreaClass">
        </asp:Content><asp:Content runat="server" ContentPlaceHolderID="PlaceHolderTopNavBar">
            <SharePoint:AspMenu runat="server" AdjustForShowStartingNode="True" StaticDisplayLevels="2" AccessKey="1" SkipLinkText="" CssClass="collapse navbar-collapse" EnableViewState="False" MaximumDynamicDisplayLevels="2" UseSeparateCSS="True" UseSimpleRendering="True" DataSourceID="topSiteMap" Orientation="Horizontal" RenderingMode="List" ID="TopNavigationMenu">
                
            </SharePoint:AspMenu>
        </asp:Content><asp:Content runat="server" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea">
            
            
            <PageFieldFieldValue:FieldValue FieldName="fa564e0f-0c70-4ab9-b863-0177e6ddd247" runat="server">
            </PageFieldFieldValue:FieldValue>
            
        </asp:Content><asp:Content runat="server" ContentPlaceHolderID="PlaceHolderMain">
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <div class="left-column-area">
                            <div class="page-image">
                                
                                
                                <PageFieldRichImageField:RichImageField FieldName="3de94b06-4120-41a5-b907-88773e493458" CssClass="page-image" runat="server">
                                    
                                </PageFieldRichImageField:RichImageField>
                                
                            </div>
                            <div class="branch-clients">CLIENTS
                                <!-- javascript will add client logos/links -->
                            </div>
                            <!-- START INNER TABLE -->
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="branch-nav">
                                        <!-- javascript will add branch buttons -->
                                        <div data-name="EditModePanelShowInEdit">
                                            
                                            
                                            <Publishing:EditModePanel runat="server" CssClass="edit-mode-panel">
                                                
                                                <div class="nav-tiles-edit">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <h3>Available Tiles
                                                            </h3>
                                                            <div id="available-tiles" class="connected-sortable row">
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <h3>Selected Tiles
                                                            </h3>
                                                            <div id="selected-tiles" class="connected-sortable row">
                                                            </div>
                                                            <div id="selection-submit">
                                                                <h2>Set Tiles
                                                                </h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="dbs-icon-json" class="row">
                                                        <div data-name="Page Field: DBS Page Icons JSON Object">
                                                            
                                                            
                                                            <PageFieldNoteField:NoteField FieldName="5ff9c8f2-4402-48d5-bfe0-997d34312eb9" runat="server">
                                                                
                                                            </PageFieldNoteField:NoteField>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </Publishing:EditModePanel>
                                            
                                        </div>
                                        <div data-name="EditModePanelShowInEdit">
                                            
                                            
                                            <Publishing:EditModePanel runat="server" PageDisplayMode="Display" CssClass="edit-mode-panel">
                                                
                                                <div class="nav-tiles-display row">
                                                </div>
                                                
                                            </Publishing:EditModePanel>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 dbs-news">
                                    <div data-name="WebPartZone">
                                        
                                        
                                        <div>
                                            <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="x0c5e5f3ee8f847e3be1fb3848649ef54" FrameType="TitleBarOnly" Orientation="Vertical">
                                                <ZoneTemplate></ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="branch-new-hires">
                                        <div data-name="WebPartZone">
                                            
                                            
                                            <div>
                                                <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="xcf8165795aac4c8f815b32cb577ede71" FrameType="TitleBarOnly" Orientation="Vertical">
                                                    <ZoneTemplate></ZoneTemplate>
                                                </WebPartPages:WebPartZone>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 dbs-news">
                                    <div data-name="WebPartZone">
                                        
                                        
                                        <div>
                                            <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="xc4ad391aef92409e95bb1f8ba9099c43" FrameType="TitleBarOnly" Orientation="Vertical">
                                                <ZoneTemplate></ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <!-- END INNER TABLE -->
                        </div>
                    </div>
                    <div class="col-md-3 sidebar">
                        <div class="row">
                            <div data-name="WebPartZone">
                                
                                
                                <div>
                                    <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="x8a3c3b20e986484498810495a1bc720a" FrameType="TitleBarOnly" Orientation="Vertical">
                                        <ZoneTemplate></ZoneTemplate>
                                    </WebPartPages:WebPartZone>
                                </div>
                                
                            </div>
                        </div>
                        <table class="about-dbs table">
                            <thead class="">
                                <tr>
                                    <td>
                                        <h1 class="">About Daugherty
                                        </h1>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="/sites/corporate/hr/dbs-orientation/SitePages/Home.aspx">Daugherty Timeline
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="/sites/corporate/marketing/_layouts/15/start.aspx#/DBSOverview">The Daugherty Overview
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="http://www.daugherty.com/about-us/leadership-team/">Leadership Team
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="dbs-social row">
                            <div class="col-xs-12">
                                <h1>Daugherty Social
                                </h1>
                                <div class="dbs-tweets">
                                    <a class="twitter-timeline" data-theme="light" href="https://twitter.com/daughertytweets" data-widget-id="433646704693235712">
                                Tweets by @daughertytweets
                                    </a>
                                </div>
                            </div>
                            <div class="social-links col-xs-12">
                                <hr />
                                <div class="row">
                                    <div class="col-xs-4">
                                        <a href="https://www.facebook.com/dbs1985">
                                            <img alt="facebook.jpg" src="/sites/corporate/PublishingImages/SitePages/Corporate%20Communications%20Home/facebook.jpg" />
                                        </a>
                                    </div>
                                    <div class="col-xs-4">
                                        <a href="https://www.linkedin.com/company/daugherty-business-solutions?trk=top_nav_home">
                                            <img alt="Linkedin.jpg" src="/sites/corporate/PublishingImages/SitePages/Corporate%20Communications%20Home/Linkedin.jpg" />
                                        </a>
                                    </div>
                                    <div class="col-xs-4">
                                        <a href="http://www.twitter.com/daughertytweets">
                                            <img alt="twitter.jpg" src="/sites/corporate/PublishingImages/SitePages/Corporate%20Communications%20Home/twitter.jpg" />
                                        </a>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-xs-4">
                                        <a href="https://www.youtube.com/user/daughertyvideo">
                                            <img alt="youtube.jpg" src="/sites/corporate/PublishingImages/SitePages/Corporate%20Communications%20Home/youtube.jpg" />
                                        </a>
                                    </div>
                                    <div class="col-xs-4">
                                        <a href="https://plus.google.com/u/0/b/114398417265202788632/114398417265202788632/posts">
                                            <img alt="Googleplus.jpg" src="/sites/corporate/PublishingImages/SitePages/Corporate%20Communications%20Home/Googleplus.jpg" />
                                        </a>
                                    </div>
                                    <div class="col-xs-4">
                                        <a href="http://instagram.com/daughertyphotos">
                                            <img alt="Instagram.jpg" src="/sites/corporate/PublishingImages/SitePages/Corporate%20Communications%20Home/Instagram.jpg" />
                                        </a>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </asp:Content>