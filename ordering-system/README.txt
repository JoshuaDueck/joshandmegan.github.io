INSTRUCTIONS FOR RUNNING WITHOUT A LIVE SERVER:

1. Open 'run'
    a. Press the windows button in the bottom left (or the windows key on your keyboard)
    b. Type 'run' and press enter
2. In the 'run' dialog box, type "chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security" (without the outermost quotes)
3. A new Chrome browser should pop up. From the downloaded files, drag "index.html" into the address bar of the browser. Hit enter, and the website should pop up.
    a. Alternatively, you can drag the index.html file into the main content window of the browser and it should automatically load the page.

Using these steps, the website should run properly without issues.
    - If these steps do not work, find a way to enable the --disable-web-security flag in your browser in a way that works for you.
        - Perhaps your user-data-dir is not the same as this command suggests, and so at that point you would need to determine this on a case-by-case basis.
        - If this still does not work, please consider using the "Live Server" VSCode extension.
            - This is how we developed it, and should be the most secure way to run the scripts so you don't need to use the --disable-web-security flag.
                - I understand that it should not require a server to run, and if the above steps work for you, it doesn't require one, but if you are unable to get this to work, we would be glad to work with you so you can view our project!

	- If ALL ELSE fails, we are hosting the webpage on GitHub Pages, and it can be accessed by visiting joshuadueck.com/ordering-system/index.html.
        - I understand that this is not in the spirit of the milestone requirements (that it cannot use a server), but this is a last resort and I would hate for us to lose marks due to a technical difficulty.
