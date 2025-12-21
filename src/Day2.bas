DefInt A-Z
$Console

_Dest _Console
startTime# = Timer

declare function findRepeats&(low$, high$)
Dim runningTotal As Long


Open "../AoC-2025/inputs/day2-ex.txt" For Input As #1
'Open "../AoC-2025/inputs/day2.txt" For Input As #1
Line Input #1, line$
line$ = RTrim$(line$)
Close #1

Do
    comma% = InStr(line$, ",")
    If comma% = 0 Then
        ' No more values, exit
        Exit Do
    Else
        token$ = Left$(line$, comma% - 1)
        line$ = Mid$(line$, comma% + 1)
    End If

    dash% = InStr(token$, "-")
    lowerVal$ = Left$(token$, dash% - 1)
    upperVal$ = Mid$(token$, dash% + 1)

    a& = findRepeats&(lowerVal$, upperVal$)
    Print lowerVal$, upperVal$
Loop


endTime# = Timer
Print "The answer is:"; runningTotal&
Print "took"; (endTime# - startTime#); "seconds"

End

Function findRepeats& (low$, high$)
    ' do some splitting and length validation
    If (Len(low$) = Len(high$) And Len(low$) Mod 2 = 1) Then
        Exit Function
    End If

    accum& = 0
    currentStep& = 0

    lowVal& = Val(Mid$(low$, 1, Len(low$) / 2))
    highVal& = Val(Mid$(high$, 1, Len(high$) / 2))

    Print lowVal&, highVal&
    findRepeats& = 0
End Function

