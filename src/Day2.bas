DefInt A-Z
'$Console

'_Dest _Console
startTime# = Timer

LockPos% = 50
countZero% = 0


'Open "../AoC-2025/inputs/day1-ex.txt" For Input As #1
Open "../AoC-2025/inputs/day1.txt" For Input As #1
count% = 0
Do While Not EOF(1)
    Line Input #1, line$
    line$ = LTrim$(line$)
    direction$ = Left$(line$, 1)
    qty% = Val(Mid$(line$, 2, (Len(line$) - 1)))

    If direction$ = "L" Then
        LockPos% = LockPos% - qty%
    Else
        LockPos% = LockPos% + qty%
    End If

    LockPos% = LockPos% Mod 100
    If LockPos% = 0 Then
        countZero% = countZero + 1
    ElseIf LockPos% < 0 Then
        LockPos% = 100 + LockPos%
    End If

    'Print line$, direction$, LockPos%, countZero%

Loop

Close #1
endTime# = Timer
Print "The answer is:"; countZero%
Print "took"; (endTime# - startTime#); "seconds"

