# WS_EDW3_33 ดึงข้อมูลกรมธรรม์ที่มี RiderCopay

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1313145662
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
[ [Overview](#WS_EDW3_33ดึงข้อมูลกรมธรรม์ที่มีRiderCopay-Overview) ] [ [Input](#WS_EDW3_33ดึงข้อมูลกรมธรรม์ที่มีRiderCopay-Input) ] [ [Process](#WS_EDW3_33ดึงข้อมูลกรมธรรม์ที่มีRiderCopay-Process) ] [ [Output](#WS_EDW3_33ดึงข้อมูลกรมธรรม์ที่มีRiderCopay-Output) ] [ [Exception](#WS_EDW3_33ดึงข้อมูลกรมธรรม์ที่มีRiderCopay-Exception) ] [ [Example Input & Output](#WS_EDW3_33ดึงข้อมูลกรมธรรม์ที่มีRiderCopay-ExampleInput&Output) ]

## Overview

ดึงข้อมูลกรมธรรม์ที่มี RiderCopay ที่ AS400

## Input

>

| Name | Type | Description | Example | Validation (Y/N) |
| --- | --- | --- | --- | --- |
| limit | numeric | limit | 100 | |
| offset | numeric | offset | 1 | |

## Process

- ดึงข้อมูลแบบประกันที่มี Rider แฝงที่ AS400

## Output

| Name | Type | Description | Example | Source |
| --- | --- | --- | --- | --- |
| policy_number | String | เลขกรมธรรม์ | 9008529 | [OLIS_OLPRIDDI](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPRIDDI).DIPOL |
| rider_plan_code | String | รหัสแบบประกัน สัญญาเพิ่มเติม | 77 | [OLIS_OLPRIDDI](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPRIDDI).DIRD |
| policy_year | Numeric | ปีกรมธรรม์ | 1 | [OLIS_OLPRIDDI](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPRIDDI).DIPOYR |
| rider_copay_client_claim_paid | Numeric | % copayment | 30 | [OLIS_OLPRIDDI](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPRIDDI).DICPM |
| copay_effective_date | Date | วันที่มีผล ตามปีกรมธรรม์ | 25650501 | [OLIS_OLPRIDDI](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPRIDDI).DIEFDT |
| copay_end_date | Date | วันที่สิ้นสุด ตามปีกรมธรรม์ | 25660430 | [OLIS_OLPRIDDI](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPRIDDI).DIENDT |
| copay_create_dae | Date | Create date | 25650401 | [OLIS_OLPRIDDI](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPRIDDI).DICRDT |
| copay_update_dae | Date | Update date | 0 | [OLIS_OLPRIDDI](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPRIDDI).DIUPDT |

## Exception

## Example Input & Output

1.

>

```

```