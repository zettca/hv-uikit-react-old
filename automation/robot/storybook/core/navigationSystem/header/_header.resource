*** Settings ***
Library      SeleniumLibrary
Variables    ../../../_resources/storybook_variables.yaml
Resource     ../../../_resources/storybook_keywords.robot


*** Keywords ***
header item should be selected
    [Arguments]    ${locator}
    [Documentation]    verify if locator contains selectedItem in class attribute
    wait until element attribute contain    ${locator}    class    selectedItem

header item should not be selected
    [Arguments]    ${locator}
    [Documentation]    verify if locator contains selectedItem in class attribute
    wait until element attribute not contain    ${locator}    class    selectedItem


*** Variables ***
${action1}             css:div[class='HvHeaderActions-root']>button:nth-child(1)
${action2}             css:div[class='HvHeaderActions-root']>button:nth-child(2)
${actions}             css:[id^=hv-actions]
${brand}               css:div[class=HvHeaderBrand-root]
${childItems}          css:ul[class*=MenuBar-active] li
${header}              css:div[class=HvHeader-header]
${iframeHeaderMain}    ${STORYBOOK_URL}/iframe.html?id=components-navigation-system-horizontal-navigation--main
${item1.1}             css:li[class*=MenuItem]:nth-child(1) li:nth-child(1)
${item1.2}             css:li[class*=MenuItem]:nth-child(1) li:nth-child(2)
${item1}               css:li[class*=MenuItem]:nth-child(1)
${item2}               css:li[class*=MenuItem]:nth-child(2)
${item3.1}             css:li[class*=MenuItem]:nth-child(3) li:nth-child(1)
${item3.2}             css:li[class*=MenuItem]:nth-child(3) li:nth-child(2)
${item3}               css:li[class*=MenuItem]:nth-child(3)
${item4}               css:li[class*=MenuItem]:nth-child(4)
${item5.1}             css:li[class*=MenuItem]:nth-child(5) li:nth-child(1)
${item5.2}             css:li[class*=MenuItem]:nth-child(5) li:nth-child(2)
${item5}               css:li[class*=MenuItem]:nth-child(5)
${items}               css:li[class*=MenuItem]
${navigation}          css:nav[class*=Navigation]