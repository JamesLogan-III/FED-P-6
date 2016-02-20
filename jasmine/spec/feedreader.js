/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         describe('allFeeds arrary - URLs', function () {
            it('are defined', function () {
                function testURL(feed) {
                    expect(feed.url).toBeDefined();
                    expect(feed.url).not.toEqual("");
                }
                allFeeds.forEach(testURL);
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
    <<<<

    >>>>


         */
         describe('allFeeds arrary - Names', function () {
            it('are defined', function () {
                 function testName(feed) {
                    expect(feed.name).toBeDefined();
                    expect(feed.name).not.toEqual("");
                }
                allFeeds.forEach(testName);
            });
        });


    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.

         The Element to be tested is the body tag and the 'menu-hidden' class, hidden by default.

         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.

    <<<<
        The toggle element is the 'menu-icon-link' class element on the hamburger menu and it's click event
        The menu should be hidden by default and toggle accordingly every even number click event
    >>>>
          */



    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.

    <<<<
        This test requires a preprocessing beforeEach Fucntion to set up the tests
        Expects feed length to be greater than 0 // not sure about this as we have no programmatic control over feed length
    >>>>
        */


    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.

    <<<<This test requires us to load the initial feed and know what it's URL and Title are
        We need to check for UI changes and can only rely on the known elements, URL and Title.
        If 2 news feeds had dupliucate content this test would fail unless we check every headline.
        For the puposes of this porject I will check the first headline of each feed, if they match we will call that an error.
    >>>>
         */
}());
