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
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. is greater than ) length and is and Array
         */
        it('are defined, not 0 length and are in an array', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
            expect(allFeeds).toBeArray();
        });

        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty, is a string, is note eqaul to "",
         * starts with http and is at least 7 charaters long - "http://"
         */
         describe('allFeeds arrary - URLs', function () {
            it('are defined, are of type String, not empty, contain string "http", and > 7 charaters.', function () {
                function testURL(feed) {
                    expect(feed.url).toBeDefined(); //check is defined
                    expect(typeof feed.url).toEqual('string'); // check for String type
                    expect(feed.url).not.toEqual(""); // check not empty
                    expect(feed.url).toStartWith('http'); // check that the URL starts with "http" or "https"
                    expect(feed.url.length).toBeGreaterThan(7); // check URL length > 7 -http://- is 7 charaters, shortest absolute URL possible
                    expect(feed.url).toBeLongerThan("http://"); //check string length > HTTP://
                }
                allFeeds.forEach(testURL);
            });
        });

        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and  that the name is not empty, is a string, is not equal to "" and longer than 1 charater
         */
         describe('allFeeds arrary - Names', function () {
            it('are defined, are of type String, not empty, and length > 1', function () {
                 function testName(feed) {
                    expect(feed.name).toBeDefined(); //check is defined
                    expect(typeof feed.name).toEqual('string'); // check for String type
                    expect(feed.name).not.toEqual(""); // check not empty
                    expect(feed.name.length).toBeGreaterThan(1); //check length > 1
                    expect(feed.name).toBeLongerThan(""); //check string length > 1
                }
                allFeeds.forEach(testName);
            });
        });

    });


    /* "The menu" */

    describe('The Menu', function() {

        /* a test that ensures the menu element is
         * hidden by default.
         * The Element to be tested is the body tag and the 'menu-hidden' class, hidden by default.
         */

         it('is hidden by defualt', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true); // check if body has class 'menu-hidden' this is how the menu visibility is determined
         });

         /* a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

         it('toggles when the hamburger menu is clicked', function(){
            var currentStateOfMenuVisibility;
            beforeEach(function(done) {
                currentStateOfMenuVisibility = $('body').hasClass('menu-hidden'); //check starting value
                $('.menu-icon-link').click(); //change value
                done();
            });
            expect($('body').hasClass('menu-hidden')).not.toBe(currentStateOfMenuVisibility); // check for change
            $('.menu-icon-link').click(); //change menu value back
            expect($('body').hasClass('menu-hidden')).not.toBe(currentStateOfMenuVisibility); // check for change back
         });

    });


    /*"Initial Entries" */

        /* a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
        */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
        //load the first feed
            loadFeed(0, function() {
                done();
            });
        });

        // check for .entry in the .feed container
        it('should contain at least 1 .entry element within the .feed container.', function() {
             expect($('.entry').length).toBeGreaterThan(0);
        });

    });

    /*"New Feed Selection" */

        /* a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * also checks to see if feed is HTML
         */
    describe('New Feed Selection', function() {
        var feed1HTML;
        var feed2HTML;
        beforeEach(function(done) {
            loadFeed(0, function() {
                feed1HTML = $('.feed').html();
                done();
            });
        });

        it('content of feed is HTML, and changes ', function(done) {
            loadFeed(1, function() {
                feed2HTML = $('.feed').html();
                expect(feed2HTML).toBeHtmlString(); // check to see if it is HTML
                expect(feed1HTML).not.toEqual(feed2HTML); // check to see if it changed
                done();
            });
        });

        afterEach(function() {
            loadFeed(0); //reload the first Feed
            $('.menu-icon-link').click(); //change menu value back
        });

    });
}());
