# EDW-MPS-AM005 Template Automail แจ้งผลการนำส่งไฟล์ I01-I05 เพื่อติด Tagging

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=944144887
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
######

###### **หน้าจอที่เกี่ยวข้อง**

- [EDW-MPS-SD008 หน้าจอประมวลผล MPS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=918028352)

###### Description

| No. | Topic | Description | | |
| --- | --- | --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | สำหรับแจ้งผลการนำส่งไฟล์ I01-I05 เพื่อติด Tagging | | |
| 2 | ผู้ใช้งาน (Target Users) | ฝ่ายคณิตศาสตร์ | | |
| 3 | ข้อมูลที่ป้อนสู่ระบบ(Input) | เลขที่กรมธรรม์ จากการดึงข้อมูล | | |
| 4 | ข้อมูลที่ได้จากระบบ(Output) | Email รายงานผลการนำส่งไฟล์ I01-I05 เพื่อติด Tagging | | |
| 5 | การกระทำกับหน้าจอ(Actions) | - | | |
| 6 | อธิบายรายละเอียด(Description) | รายละเอียดของ Auto Email แจ้งผลการนำส่งไฟล์ I01-I05 เพื่อติด Tagging มีดังนี้ **รูปแบบ Auto Email ในระบบ** To | $emailRecipient | |
| Subject | [EDW] แจ้งผลการนำส่งไฟล์ I01-I05 เพื่อติด Tagging ประจำเดือน $period | | | |
| Text | เรียน ทีมคณิตศาสตร์, แจ้งผลการนำส่งไฟล์ I01-I05 เพื่อติด Tagging ประจำเดือน: $periodShared Drive Folder: $sharedDriveFolder **รายการข้อมูล** | **จำนวนกรมธรรม์**** ****ที่สำเร็จ** | **จำนวนกรมธรรม์**** **ที่ Duplicate | **สถานะ** |
| ข้อมูล I01 Main Policy Master GMM (untag) | $totalPolicy | $totalDup | $status | |
| ข้อมูล I02 Rider Products Policy Master GMM (untag) | $totalPolicy | $totalDup | $status | |
| ข้อมูล I03 PA Products Policy Master GMM (untag) | $totalPolicy | $totalDup | $status | |
| ข้อมูล I04 Unit Linked Products Policy Master VFA (untag) | $totalPolicy | $totalDup | $status | |
| ข้อมูล I05 Group YRT Inforce Policy PAA (untag) | $totalPolicy | $totalDup | $status | |

อีเมล์ฉบับนี้ส่งจากระบบอัตโนมัติ กรุณาอย่าตอบกลับ

ขอแสดงความนับถือ

#### ตัวแปร ที่เปลี่ยนตามข้อมูลในระบบ

| ตัวแปร | คำอธิบาย |
| --- | --- |
| $emailRecipient | ผู้รับอีเมลฝ่ายปฏิบัติการประกันชีวิต และฝ่ายคณิตศาสตร์ โดยสามารถเพิ่มหรือลดสมาชิกภายใต้อีเมลกลุ่มได้ ดังนี้[porapol.li@ocean.co.th](mailto:porapol.li@ocean.co.th)[prapas.si@ocean.co.th](mailto:prapas.si@ocean.co.th)[passawon.wa@ocean.co.th](mailto:passawon.wa@ocean.co.th)[panupun.pl@ocean.co.th](mailto:panupun.pl@ocean.co.th) |
| $period | แสดงรอบการประมวลผลประจำเดือน ในรูปแบบ YYYY/MM รายละเอียด ดังนี้MM คือ เดือนแบบ 01-12YYYY คือ ปี ค.ศ. แบบ 1999-9999 **พ.ศ. แบบ 2500-9999** |
| $totalPolicy | แสดงจำนวนกรมธรรม์ที่สำเร็จตามประเภทไฟล์ข้อมูล |
| $status | แสดงสถานะของการประมวลผล ดังนี้สำเร็จไม่สำเร็จ |
| $totalDup | แสดงจำนวนกรมธรรม์ที่ duplicate ตามประเภทไฟล์ข้อมูล |
| $sharedDriveFolder | แสดงชื่อของ Shared Drive Folder ในรูปแบบ YYYYMM รายละเอียด ดังนี้MM คือ เดือนแบบ 01-12YYYY คือ ปี ค.ศ. แบบ 1999-9999 |

**ตัวอย่าง Auto Email ที่ได้รับกรณีระบบตรวจสอบข้อมูลไฟล์ เรียบร้อยแล้ว**

| To | | | | |
| --- | --- | --- | --- | --- |
| Subject | [EDW] แจ้งผลการนำส่งไฟล์ I01-I05 เพื่อติด Tagging ประจำเดือน 2565/12 | | | |
| Text | [ ](mailto:piyawat.ju@ocean.co.th)เรียน ทีมคณิตศาสตร์,[ ](mailto:piyawat.ju@ocean.co.th) แจ้งผลการนำส่งไฟล์ I01-I05 เพื่อติด Tagging[ ](mailto:piyawat.ju@ocean.co.th)ประจำเดือน: 2565/12Shared Drive Folder: 202212 **รายการข้อมูล** | **จำนวนกรมธรรม์**** ****ที่สำเร็จ** | **จำนวนกรมธรรม์**** **ที่ Duplicate | **สถานะ** |
| ข้อมูล I01 Main Policy Master GMM (untag) | 52,355 | 200 | สำเร็จ | |
| ข้อมูล I02 Rider Products Policy Master GMM (untag) | | 2,300 | สำเร็จ | |
| ข้อมูล I03 PA Products Policy Master GMM (untag) | 12,005 | 5 | สำเร็จ | |
| ข้อมูล I04 Unit Linked Products Policy Master VFA (untag) | 355 | | สำเร็จ | |
| ข้อมูล I05 Group YRT Inforce Policy PAA (untag) | 6,389 | | สำเร็จ | |

อีเมล์ฉบับนี้ส่งจากระบบอัตโนมัติ กรุณาอย่าตอบกลับ

ขอแสดงความนับถือ