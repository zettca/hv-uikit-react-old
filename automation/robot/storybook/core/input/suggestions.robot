*** Setting ***
Resource      ../_keywords.resource
Test Setup    Run Keywords
...           Go To    ${components}input--suggestion
...           AND    Wait Until Element Is Enabled    ${input}


*** Test Cases ***
update suggestions when input is being changed
    Press Keys                          ${input}    p
    Wait Until Page Contains            Pakistan
    Press Keys                          NONE    o
    Wait Until Page Does Not Contain    Pakistan
    Page Should Contain                 Portugal
    Page Should Contain Element         ${suggestion_options}    limit=2

update suggestions by server side when input is being changed
    [Setup]    NONE
    Go To                               ${components}forms-suggestions--server-side-suggestions
    Wait Until Element Is Enabled       ${input}
    Press Keys                          ${input}    tu
    Wait Until Page Contains            Tunisia
    Press Keys                          NONE    g
    Wait Until Page Does Not Contain    Tunisia
    Wait Until Page Contains            Portugal
    Page Should Contain Element         ${suggestion_options}    limit=1

close suggestions list when a suggestion item is selected
    Press Keys                           ${input}    po
    Wait Until Element Is Visible        ${suggestion_list}
    Click Element                        ${suggestion_Portugal}
    Wait Until Element Is Not Visible    ${suggestion_list}
    Textfield Value Should Be            ${input}    Portugal

select correctly suggestion when suggestion text area is pressed
    [Tags]    run-any-way
    [Documentation]   Bug wait resolution
    ...               https://github.com/lumada-design/hv-uikit-react/issues/1746
    Press Keys                           ${input}    po
    Wait Until Element Is Visible        ${suggestion_list}
    Click Element                        xpath://p[.='Portugal']
    Wait Until Element Is Not Visible    ${suggestion_list}
    Run Keyword And Expect Error         *should have been 'Portugal' but was 'po'.
    ...    Textfield Value Should Be     ${input}    Portugal


close suggestions list when did not have related suggestions to display
    Press Keys                           ${input}    Jo
    Wait Until Element Is Visible        ${suggestion_list}
    Press Keys                           NONE   ao
    Wait Until Element Is Not Visible    ${suggestion_list}

close suggestions list when is clicked away
    Press Keys                           ${input}    po
    Wait Until Element Is Visible        ${suggestion_list}
    Click Element                        ${label}
    Wait Until Element Is Not Visible    ${suggestion_list}
    Textfield Value Should Be            ${input}    po

close suggestions list when input is cleaned
    Press Keys                           ${input}    p
    Wait Until Element Is Visible        ${suggestion_list}
    Press Keys                           NONE    BACKSPACE
    Wait Until Element Is Not Visible    ${suggestion_list}


*** Variables ***
${input}                 css:input[type=text]
${label}                 css:#suggestions-label
${suggestion_list}       css:ul[role=menu]
${suggestion_options}    css:ul[role=menu]>li
${suggestion_Portugal}   xpath://li[.='Portugal']