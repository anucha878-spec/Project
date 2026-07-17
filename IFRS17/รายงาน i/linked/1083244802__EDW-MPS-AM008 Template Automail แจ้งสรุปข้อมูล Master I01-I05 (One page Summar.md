# EDW-MPS-AM008 Template Automail แจ้งสรุปข้อมูล Master I01-I05 (One page Summary)

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1083244802
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
###### หน้าจอที่เกี่ยวข้อง

- [EDW-MPS-SD008 หน้าจอประมวลผล MPS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=918028352)
- [EDW-MPS-RP018 ดึงข้อมูลออกรายงาน One Page Summary (I01 - I05)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1079018349)

###### Description

| No. | Topic | Description | |
| --- | --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | สำหรับแจ้งผลสรุปข้อมูล Master I01-I05 (One page Summary) | |
| 2 | ผู้ใช้งาน (Target Users) | ฝ่ายคณิตศาสตร์ | |
| 3 | ข้อมูลที่ป้อนสู่ระบบ(Input) | ข้อมูลกรมธรรม์ Master I01-I05 และ Tagging I01-I05 | |
| 4 | ข้อมูลที่ได้จากระบบ(Output) | Email รายงานผลสรุปข้อมูล Master I01-I05 (One page Summary) | |
| 5 | การกระทำกับหน้าจอ(Actions) | - | |
| 6 | อธิบายรายละเอียด(Description) | รายละเอียดของ Auto Email แจ้งสรุปผลข้อมูล Master I01-I05 (One page Summary) มีดังนี้ **รูปแบบ Auto Email ในระบบ** To | $emailRecipient |
| Subject | [EDW] แจ้งผลสรุปข้อมูล Master I01-I05 ประจำเดือน $period | | |
| Text | **รายการข้อมูล** | **จำนวนรายการ** | สถานะการส่ง EDW |
| ข้อมูล I01 Main Policy Master GMM | $totalNoOfPolicy | $status_mps | |
| ข้อมูล I02 Rider Products Policy Master GMM | $totalNoOfPolicy | $status_mps | |
| ข้อมูล I03 PA Products Policy Master GMM | $totalNoOfPolicy | $status_mps | |
| ข้อมูล I04 Unit linked Products Policy Master VFA | $totalNoOfPolicy | $status_mps | |
| ข้อมูล I05 Group YRT Inforce Policy PAA | $totalNoOfPolicy | $status_mps | |
| รายงาน One Page Summary I01-I05 | 0 | $status_mps | |

![(star)](http://wiki.thaisamut.co.th/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/star_yellow.png) *กรณี $status_mps สถานะประมวลผลเป็น **สำเร็จ** ให้ใช้รูปแบบตารางข้อมูลนี้*

| **รายการข้อมูล** | Last Month (1) | New Business (2) | Total (3)=(1)+(2) | No of Policy (4) | Reconcile | สถานะการส่ง EDW |
| --- | --- | --- | --- | --- | --- | --- |
| ข้อมูล I01 Main Policy Master GMM | $totalLastMonth | $totalNewBusiness | $totalPolicy | $totalNoOfPolicy | $status | $status_mps |
| ข้อมูล I02 Rider Products Policy Master GMM | $totalLastMonth | $totalNewBusiness | $totalPolicy | $totalNoOfPolicy | $status | $status_mps |
| ข้อมูล I03 PA Products Policy Master GMM | $totalLastMonth | $totalNewBusiness | $totalPolicy | $totalNoOfPolicy | $status | $status_mps |
| ข้อมูล I04 Unit Linked Products Policy Master VFA | $totalLastMonth | $totalNewBusiness | $totalPolicy | $totalNoOfPolicy | $status | $status_mps |
| ข้อมูล I05 Group YRT Inforce Policy PAA | $totalLastMonth | $totalNewBusiness | $totalPolicy | $totalNoOfPolicy | $status | $status_mps |

โดยรายละเอียดทั้งหมดตามไฟล์แนบ

**อีเมล์ฉบับนี้ส่งจากระบบอัตโนมัติ กรุณาอย่าตอบกลับ**

ขอแสดงความนับถือ

#### ตัวแปร ที่เปลี่ยนตามข้อมูลในระบบ

| ตัวแปร | คำอธิบาย |
| --- | --- |
| $emailRecipient | ผู้รับอีเมลฝ่ายคณิตศาสตร์ ดังนี้[porapol.li@ocean.co.th](mailto:porapol.li@ocean.co.th)[prapas.si@ocean.co.th](mailto:prapas.si@ocean.co.th)[passawon.wa@ocean.co.th](mailto:passawon.wa@ocean.co.th)[panupun.pl@ocean.co.th](mailto:panupun.pl@ocean.co.th) |
| $period | แสดงรอบการประมวลผลประจำเดือน ในรูปแบบ MM/YYYY รายละเอียด ดังนี้MM คือ เดือนแบบ 01-12YYYY คือ ปี พ.ศ. แบบ 2500-9999 |
| $totalLastMonth | แสดงจำนวนกรมธรรม์ Last Month |
| $totalNewBusiness | แสดงจำนวนกรมธรรม์ New Business |
| $totalPolicy | แสดงจำนวนกรมธรรม์ Total |
| $totalNoOfPolicy | แสดงจำนวนกรมธรรม์ No of Policy |
| $status | แสดงสถานะของการประมวลผล ดังนี้ข้อมูลถูกต้อง : เมื่อประมวลผลเทียบ Total(3) และ No of Policy(4) ผลลัพธ์เท่ากันข้อมูลไม่ถูกต้อง : เมื่อประมวลผลเทียบ Total(3) และ No of Policy(4) ผลลัพธ์ไม่เท่ากัน |
| $status_mps | แสดงสถานะของการประมวลผล MPS ส่งเข้าระบบ EDW ดังนี้สำเร็จไม่สำเร็จ |
| $sharedDriveFolder | แสดงชื่อของ Shared Drive Folder ในรูปแบบ YYYYMM รายละเอียด ดังนี้YYYY คือ ปี ค.ศ. แบบ 1999-9999MM คือ เดือนแบบ 01-12 |

**ตัวอย่าง Auto Email ที่ได้รับกรณีระบบตรวจสอบข้อมูลไฟล์ เรียบร้อยแล้ว**

| To | , , , | | |
| --- | --- | --- | --- |
| Subject | [EDW] แจ้งผลสรุปข้อมูล Master I01-I05 ประจำเดือน 2566/12 | | |
| Text | **รายการข้อมูล** | **จำนวนรายการ** | **สถานะ** |
| ข้อมูล I01 Main Policy Master GMM | 2,355 | ไม่สำเร็จ | |
| ข้อมูล I02 Rider Products Policy Master GMM | 2,355 | ไม่สำเร็จ | |
| ข้อมูล I03 PA Products Policy Master GMM | 2,355 | ไม่สำเร็จ | |
| ข้อมูล I04 Unit linked Products Policy Master VFA | 2,355 | ไม่สำเร็จ | |
| ข้อมูล I05 Group YRT Inforce Policy PAA | 2,355 | ไม่สำเร็จ | |

![(star)](http://wiki.thaisamut.co.th/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/star_yellow.png) *กรณี $status_mps สถานะประมวลผลเป็น **สำเร็จ** ให้ใช้รูปแบบตารางข้อมูลนี้*
| **รายการข้อมูล** | Last Month (1) | New Business (2) | Total (3)=(1)+(2) | No of Policy (4) | Reconcile | สถานะการส่ง EDW |
| --- | --- | --- | --- | --- | --- | --- |
| ข้อมูล I01 Main Policy Master GMMMain_PolicyMaster (I01) | 117,923 | 7,521 | 125,444 | 125,444 | ข้อมูลถูกต้อง | สำเร็จ |
| ข้อมูล I02 Rider Products Policy Master GMMRider_PolicyMaster (I02) | 524,102 | 0 | 524,102 | 524,102 | ข้อมูลถูกต้อง | สำเร็จ |
| ข้อมูล I03 PA Products Policy Master GMMPA_PolicyMaste r(I03) | 6,472 | 0 | 6,472 | 6,472 | ข้อมูลถูกต้อง | สำเร็จ |
| ข้อมูล I04 Unit Linked Products Policy Master VFAUL_PolicyMaster (I04) | 533 | 0 | 533 | 533 | ข้อมูลถูกต้อง | สำเร็จ |
| ข้อมูล I05 Group YRT Inforce Policy PAAI05_Group_PolicyMaster (I05) | 411 | 0 | 411 | 411 | ข้อมูลถูกต้อง | สำเร็จ |

โดยรายละเอียดทั้งหมดตามไฟล์แนบ

**อีเมล์ฉบับนี้ส่งจากระบบอัตโนมัติ กรุณาอย่าตอบกลับ**

ขอแสดงความนับถือ