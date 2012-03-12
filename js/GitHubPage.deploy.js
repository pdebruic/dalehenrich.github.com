smalltalk.addPackage('GitHubPage', {});
smalltalk.addClass('GitHubPage', smalltalk.Widget, ['username', 'repositoryDiv'], 'GitHubPage');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(self, "_renderBodyOn_", [html]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){(function($rec){smalltalk.send($rec, "_with_", ["Refresh repository list"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@repositoryDiv'], "_contents_", [(function(div){return smalltalk.send(self, "_renderRepositoriesOn_", [div]);})]);})]);})(smalltalk.send(h, "_button", []));return smalltalk.send(h, "_with_", ["."]);})]);
smalltalk.send(html, "_strong_", ["Repositories"]);
(self['@repositoryDiv']=(function($rec){smalltalk.send($rec, "_with_", [(function(h){return smalltalk.send(self, "_renderRepositoriesOn_", [h]);})]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_div", [])));
return self;}
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_username'),
smalltalk.method({
selector: unescape('username'),
fn: function (){
var self=this;
return self['@username'];
return self;}
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_username_'),
smalltalk.method({
selector: unescape('username%3A'),
fn: function (aString){
var self=this;
(self['@username']=aString);
return self;}
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_sampleRepositoryResponse'),
smalltalk.method({
selector: unescape('sampleRepositoryResponse'),
fn: function (){
var self=this;
unescape("%0A%20%20%7B%0A%20%20%20%20%22git_url%22%3A%20%22git%3A//github.com/dalehenrich/smallsource.git%22%2C%0A%20%20%20%20%22ssh_url%22%3A%20%22git@github.com%3Adalehenrich/smallsource.git%22%2C%0A%20%20%20%20%22mirror_url%22%3A%20null%2C%0A%20%20%20%20%22url%22%3A%20%22https%3A//api.github.com/repos/dalehenrich/smallsource%22%2C%0A%20%20%20%20%22has_downloads%22%3A%20true%2C%0A%20%20%20%20%22created_at%22%3A%20%222012-01-30T18%3A02%3A07Z%22%2C%0A%20%20%20%20%22has_issues%22%3A%20false%2C%0A%20%20%20%20%22master_branch%22%3A%20null%2C%0A%20%20%20%20%22description%22%3A%20%22Smalltalk%20source%20files%22%2C%0A%20%20%20%20%22forks%22%3A%200%2C%0A%20%20%20%20%22svn_url%22%3A%20%22https%3A//github.com/dalehenrich/smallsource%22%2C%0A%20%20%20%20%22html_url%22%3A%20%22https%3A//github.com/dalehenrich/smallsource%22%2C%0A%20%20%20%20%22fork%22%3A%20true%2C%0A%20%20%20%20%22has_wiki%22%3A%20true%2C%0A%20%20%20%20%22private%22%3A%20false%2C%0A%20%20%20%20%22clone_url%22%3A%20%22https%3A//github.com/dalehenrich/smallsource.git%22%2C%0A%20%20%20%20%22homepage%22%3A%20%22%22%2C%0A%20%20%20%20%22size%22%3A%20128%2C%0A%20%20%20%20%22open_issues%22%3A%200%2C%0A%20%20%20%20%22updated_at%22%3A%20%222012-03-01T16%3A36%3A38Z%22%2C%0A%20%20%20%20%22owner%22%3A%20%7B%0A%20%20%20%20%20%20%22url%22%3A%20%22https%3A//api.github.com/users/dalehenrich%22%2C%0A%20%20%20%20%20%20%22gravatar_id%22%3A%20%225d423de04ebac0b8f9412a9a381c9460%22%2C%0A%20%20%20%20%20%20%22login%22%3A%20%22dalehenrich%22%2C%0A%20%20%20%20%20%20%22avatar_url%22%3A%20%22https%3A//secure.gravatar.com/avatar/5d423de04ebac0b8f9412a9a381c9460%3Fd%3Dhttps%3A//a248.e.akamai.net/assets.github.com%252Fimages%252Fgravatars%252Fgravatar-140.png%22%2C%0A%20%20%20%20%20%20%22id%22%3A%20623951%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22name%22%3A%20%22smallsource%22%2C%0A%20%20%20%20%22watchers%22%3A%202%2C%0A%20%20%20%20%22pushed_at%22%3A%20%222012-01-31T23%3A28%3A34Z%22%2C%0A%20%20%20%20%22id%22%3A%203307281%2C%0A%20%20%20%20%22language%22%3A%20null%0A%20%20%7D%2C%0A");
return self;}
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_renderRepositoriesOn_'),
smalltalk.method({
selector: unescape('renderRepositoriesOn%3A'),
fn: function (html){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(unescape("https%3A//api.github.com/users/"), "__comma", [smalltalk.send(self, "_username", [])]), "__comma", [unescape("/repos")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("success", "__minus_gt", [(function(repositoryData, status, jqXHR){return smalltalk.send(self, "_renderRepositoryData_on_", [repositoryData, html]);})]),smalltalk.send("error", "__minus_gt", [(function(jqXHR, textStatus, errorThrown){smalltalk.send(html, "_p_", [smalltalk.send(smalltalk.send(smalltalk.send("none found: ", "__comma", [smalltalk.send(textStatus, "_printString", [])]), "__comma", [" : "]), "__comma", [smalltalk.send(errorThrown, "_printString", [])])]);return smalltalk.send(html, "_p_", [unescape("Works%20from%20my%20laptop%2C%20but%20not%20from%20GitHub%20pages%3F%3F%3F")]);})])])]);
return self;}
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_renderRepositoryData_on_'),
smalltalk.method({
selector: unescape('renderRepositoryData%3Aon%3A'),
fn: function (repositoryData, html){
var self=this;
var homepage=nil;
smalltalk.send(html, "_ul_", [(function(){return smalltalk.send(repositoryData, "_do_", [(function(repo){return smalltalk.send(html, "_p_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(repo, "_at_", ["html_url"])]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_strong_", [smalltalk.send(repo, "_name", [])]);})]);})(smalltalk.send(html, "_a", []));smalltalk.send((homepage=smalltalk.send(repo, "_homepage", [])), "_ifNotEmpty_", [(function(){smalltalk.send(html, "_with_", [unescape("%20%5B")]);(function($rec){smalltalk.send($rec, "_href_", [homepage]);return smalltalk.send($rec, "_with_", [homepage]);})(smalltalk.send(html, "_a", []));return smalltalk.send(html, "_with_", [unescape("%5D")]);})]);return (function($rec){smalltalk.send($rec, "_with_", [unescape("%20-%20")]);return smalltalk.send($rec, "_with_", [smalltalk.send(repo, "_description", [])]);})(html);})]);})]);})]);
return self;}
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_renderBodyOn_'),
smalltalk.method({
selector: unescape('renderBodyOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", [unescape("Hi%20there%2C%20world.%20This%20page%20is%20powered%20by%20")]);(function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//amber-lang.net/")]);return smalltalk.send($rec, "_with_", ["Amber Smalltalk"]);})(smalltalk.send(h, "_a", []));return smalltalk.send(h, "_with_", ["."]);})]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", [unescape("If%20you%27re%20new%20to%20Smalltalk%2C%20take%20an%20")]);(function($rec){smalltalk.send($rec, "_href_", [unescape("amber/learn.html")]);return smalltalk.send($rec, "_with_", [unescape("Amber-powered%20Smaltalk%20tutorial")]);})(smalltalk.send(h, "_a", []));return smalltalk.send(h, "_with_", [unescape("%20right%20in%20your%20own%20browser%21")]);})]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", ["The list of repositories below is generated by making calls to the"]);(function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//developer.github.com/")]);return smalltalk.send($rec, "_with_", [" GitHub development API"]);})(smalltalk.send(h, "_a", []));return smalltalk.send(h, "_with_", [" from Amber Smalltalk."]);})]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", ["If you want to see how this is done: "]);(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send("Browse the ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]), "__comma", [" class"])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [smalltalk.send(self, "_class", [])]);})]);})(smalltalk.send(h, "_button", []));return smalltalk.send(h, "_with_", ["."]);})]);
smalltalk.send(html, "_p_", [unescape("If%20I%20were%20any%20kind%20of%20a%20web%20developer%20%28Smalltalk%20is%20my%20game%29%20this%20page%20would%20look%20a%20lot%20prettier.")]);
return self;}
}),
smalltalk.GitHubPage);


smalltalk.addMethod(
unescape('_openOn_'),
smalltalk.method({
selector: unescape('openOn%3A'),
fn: function (aString){
var self=this;
(function($rec){smalltalk.send($rec, "_username_", [aString]);return smalltalk.send($rec, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.GitHubPage.klass);


