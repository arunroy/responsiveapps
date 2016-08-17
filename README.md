# responsiveapps
A responsive webpage with pure HTML, CSS and plain Javascript
  
  Requirement Gathering Questions
  -------------------------------
        Q1. What is the expected functionality of the search button in 'Lookup.pdf'?

                For search box, I am planning to send an AJAX request on a key down event to fetch the matching data from the server and render them on the front end.

                For a real-time scenario where there are hundreds of thousands of records, it would be better to get as many data rows as required from the server rather than downloading the entire data set to the client side.

               But for this exercise, is it okay to download the entire data set to the client side on page load?

---

        Q2. For the Practical Test - 'Pivot-Table.pdf', in the initial screen with the first data set, I would check with the user if disabling the 'previous' account button or hiding the button will make more sense to them.

                I would prefer making the button disabled rather than hidden, so that even before going through the details of the next account, the user will be informed about this feature.

---

        Q3. For the Practical Test - 'Pivot-Table.pdf', for the responsive mobile view, first two rows in the table doesn't have any indicator that these two fields are referring to 'Product' and 'Interest rate'. 

                I think it would to  be better add this  info to these fields, because there could be other figures in percentages(other than interest rates) when it comes to banking, which may confuse the user about what is displayed on                       the screen.

---

        Q4. Can we make use of a library like jQuery so that JSON parsing would be easier?

               I have learnt that IE8 and lower versions don’t support JSON. In the requirement, it is mentioned that a service should return a JSON array which has to be rendered to the front end. In pure JavaScript AJAX, this could               be achieved using XMLHttpRequest/ActiveX Objects. But for older versions of IE, if we use a library like jQuery 1.12, handling JSON arrays would be much simpler.           

               Can we make use of jQuery for AJAX requests?
---

        Q5. Who should be given access to this page and from where?

               Considering this page as a part of an application, it would make sense to ask the user about who will have access to the page and where would the user use this feature.


---
        Q6. Can we use polyfills like respond.js to make responsive web designs in browsers that don’t support CSS3 Media Queries – in particular, Internet Explorer 8 and under?

               For implementing mobile views, the plan is to make use of CSS Media queries. But because Internet Explorer versions before IE9 do not support media queries, one alternative in thoughts was to use IE's conditional                                  commenting and so include a custom css for handling styles for earlier versions. But I have read that this approach could not work all the times.

                            <link rel="stylesheet" type="text/css" media="all" href="style.css"/>
                            <!--[if lt IE 9]>
                            <link rel="stylesheet" type="text/css" media="all" href="style-ie.css"/>
                            <![endif]-->

               If we could make use of a polyfill library like respond.js, these situations could be handled better.
