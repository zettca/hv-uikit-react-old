*** Settings ***
Library    SeleniumLibrary
Library    Collections
Variables    storybook_variables.yaml

*** Keywords ***
open storybook
    [Arguments]        ${url}=${STORYBOOK_URL}    ${browser}=${BROWSER}
    [Documentation]
    ...                Open the choosen browser on the storybook url provided
    ...
    ...                Arguments:
    ...                - url         (string)    url address of storybook (by default is assuming variable ${STORYBOOK_URL})
    ...                - browser     (string)    the desired browser ( by defautl is assuming variable ${BROWSER} )
    ...
    Open Browser               ${url}    ${browser}
    Maximize Browser Window

apply storybook theme
    [Arguments]        ${theme}=default
    [Documentation]
    ...                Change storybook as argument theme that can be "default" or "dark"
    ...                if the actual theme is as argument theme don't do nothing
    ...
    ...                themes assumptions:
    ...                - recognize as dark theme when "change theme" button color is rgb(204, 204, 204)
    ...    
    ${button}                      Set Variable                       //button[.='Change theme']
    ${color}                       get css property value             ${button}                             color
    ${actual_theme}=               Set Variable If                    '${color}' == 'rgb(204, 204, 204)'    dark     default
    Return From Keyword If         '${actual_theme}' == '${theme}'
    Click Button                   ${button}
    Wait Until Keyword Succeeds    5    400ms    verify css element property has different value    ${button}    color    ${color}

get css property value
    [Arguments]        ${locator}    ${property}
    [Documentation]
    ...                Get the CSS property value of an Element.
    ...
    ...                This keyword retrieves the CSS property value of an element. The element
    ...                is retrieved using the locator.
    ...
    ...                Arguments:
    ...                - locator                          (string)    any Selenium Library supported locator xpath/css/id etc.
    ...                - property_name                    (string)    the name of the css property for which the value is returned.
    ...
    ...                Returns                            (string)    returns the string value of the given css attribute or fails.
    ...
    ...                note: Same output can be get by javascript: "return window.getComputedStyle(document.getElementById("${locator}"), null).getPropertyValue("${attribute name}");
    ...                IE11 webdriver have a bug that returns error running that javascript
    ...    
    ${css}=         Wait Until Keyword Succeeds    5         400ms                        Get WebElement       ${locator}
    ${prop_val}=    Call Method                    ${css}    value_of_css_property    ${property}
    [Return]        ${prop_val}

verify css element properties
    [Arguments]        ${locator}    ${css}
    [Documentation]
    ...                Compare all css properties of a dictionary against a web element
    ...
    ...                Arguments:
    ...                - locator     (string)        any Selenium Library supported locator xpath/css/id etc.
    ...                - css         (dictionary)    dictionary with css property and value
    ...
    ...                Returns       (string)        returns Fail if CSS property is different
    ...
    ${keys}                         Get Dictionary Keys    ${css}
    &{dict}=                        Create Dictionary
    FOR                             ${i}                   IN                        @{keys}
    \                               ${value}=              get css property value    ${locator}       ${i}
    \                               Set To Dictionary      ${dict}                   ${i}=${value}
    Dictionaries Should Be Equal    ${css}                 ${dict}                   error message: the CSS Properties ${dict} don't match as expected ${css}

verify element is not focused
    [Arguments]        ${locator}
    ${value}           Run Keyword And Return Status    Element Should Be Focused    ${locator}
    Should Be Equal    ${value}                         ${False}                     error message: The element is focused

verify css element property has different value
    [Arguments]    ${locator}    ${property}    ${value}
    ${current_value}       get css property value    ${locator}    ${property}
    Should Not Be Equal    ${current_value}          ${value}      error message: the css element property should have different value of "${value}"
    
verify css element property value
    [Arguments]    ${locator}    ${property}    ${value}
    ${current_value}    get css property value    ${locator}    ${property}
    Should Be Equal     ${current_value}          ${value}      error message: the css element property don't have the correct value



    
    