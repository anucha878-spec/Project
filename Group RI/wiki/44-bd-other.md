===== PAGE 1289389359 | Software Requirements Specification > 03. Business Processes and Screens Design =====
## Module List
| Module ID | Module Name | Module Decription | Process ID | Process Name | Description |
| RC | 01. Module Reconcile Data (RC) | กระบวนการนำเข้าข้อมูลจากระบบประกันกลุ่มสำหรับ Reconcile ข้อมูลก่อนประมวลผล | BD-RC-000 | หน้าจอ Reconcile Data | สำหรับตรวจสอบข้อมูลจากระบบประกันกลุ่มที่ใช้ในการประมวลผล Estimate และ Actual โดยมีการกำหนดขั้นตอนและสิทธิ์การใช้งานแยกตามบทบาท Maker และ Checker |
| PS | 02. Module Process Data (PS) | กระบวนการดึงข้อมูลจากระบบประกันกลุ่ม เพื่อประมวลผล Estimate/ Actual ในระบบ Group RI | BD-PS-001 | ข้อมูล Master group policy (List of policy) | สำหรับนำเข้าข้อมูล Investigate Expense ผ่านไฟล์นำเข้า (Import File) ในรูปแบบ Excel ตามโครงสร้างที่กำหนด โดยสามารถดำเนินการนำเข้าได้ตาม Quarter Period ที่เลือก โดยข้อมูลที่นำเข้าจะถูกใช้ในกระบวนการ Actual เพื่อคำนวณและบันทึกค่าใช้จ่ายที่เกิดขึ้นจริง |
| BD-PS-002 | ข้อมูล กรมธรรม์ ณ ต้นสัญญา (Estimate) | สำหรับ นำเข้าไฟล์ข้อมูลกรมธรรม์ Unname เข้าสู่ระบบ Group Reinsurance เพื่อใช้ในการ ประมวลผล Estimate ของกลุ่มกรมธรรม์ Unname Policy โดยมีการกำหนดขั้นตอนและสิทธิ์การใช้งานแยกตาม Maker และ Checker |
| BD-PS-003 | ข้อมูล Claim (Estimate,Actual) | สำหรับ นำเข้าไฟล์ข้อมูลกรมธรรม์ Unname เข้าสู่ระบบ Group Reinsurance เพื่อใช้ในการ ประมวลผล Actual ของกลุ่มกรมธรรม์ Unname Policy โดยมีการกำหนดขั้นตอนและสิทธิ์การใช้งานแยกตาม Maker และ Checker |
| BD-PS-004 | ข้อมูล Estimated Premium Layer (Estimate,Actual) |  |
| BD-PS-005 | ข้อมูล (R01) List of inforce by member (Estimate,Actual) |  |
| BD-PS-006 | ข้อมูล Alteration (Actual) |  |
| BD-PS-007 | ข้อมูล (R17) List of inforce by policy (Actual) |  |
| BD-PS-008 | ข้อมูล (R61) Premium and movement (Actual) |  |
| BD-PS-009 | ข้อมูล Experience Refund (Actual) |  |
| BD-PS-010 | ข้อมูล Member over 70 year (Actual) |  |
| BD-PS-011 | ข้อมูล Investigate Expense (Actual) |  |
| BD-PS-012 | ข้อมูล Unname Policy (Estimate,Actual) |  |
| BD-PS-013 | ข้อมูล Nature of Business |  |
| BD-PS-014 | ข้อมูลตั้งฐานกรมธรรม์ที่เคยส่ง Reinsurance |  |
| BD-PS-015 | ข้อมูลตั้งฐาน Profit Commission |  |
| RP | 03. Module Report (RP) | กระบวนการออกรายงาน นำเข้า/ส่งออก | RP-RC-001 | Policy_{FROM}_{TO}_{TREATY} |  |
| RP-RC-002 | Est_PremiumLayer_{YYYY}{MM} |  |
| RP-RC-003 | Act_PremiumLayer_{YYYY}{QQ} |  |
| RP-RC-004 | Alteration_{YYYY}{QQ} |  |
| RP-RC-005 | Premium_Movement_{YYYY}{QQ} |  |
| RP-RC-006 | MemberOverAge_{YYYY}{QQ} |  |
| RP-RC-007 | InvestigationExpense_{YYYY}{QQ} |  |
| RP-RC-012 | I_Master_{YYYY}{MM} |  |
| EP | 04. Module Estimate Process (EP) | กระบวนการประมวลผลและคำนวณข้อมูล Estimate | BD-EP-001 | ประมวลผล Estimate |  |
| BD-EP-002 | หน้าจอประมวลผล Estimate |  |
| AP | 05. Module Actual Process (AP) | กระบวนการประมวลผลและคำนวณข้อมูล Actual | BD-AP-001 | ประมวลผล Actual |  |
| BD-AP-002 | หน้าจอประมวลผล Actual |  |
| CF | 06. Module Master Config (CF) | กระบวนการ Setup ข้อมูลต่างๆ เพื่อใช้ในการประมวลผล RI | BD-CF-001 | กระบวนการจัดการข้อมูล Reinsurer |  |
| BD-CF-002 | กระบวนการจัดการข้อมูล Treaty |  |

### AS-IS DIAGRAM

### TO-BE DIAGRAM


===== PAGE 1289389360 | Software Requirements Specification > 03. Business Processes and Screens Design > 01. Module Reconcile Data (RC) =====
(empty page)


===== PAGE 1298563634 | Software Requirements Specification > 03. Business Processes and Screens Design > 01. Module Reconcile Data (RC) > BD-RC-000 หน้าจอ Reconcile Data =====
### สิทธิ์การเข้า
- ฝ่ายคณิตศาสตร์ประกันภัยต่อ

### Assumption
- ผู้ใช้งานต้อง Log in เข้าใช้งานอย่างถูกต้อง
- ผู้ใช้งานต้องมีสิทธิ์การเข้าถึงหน้าจอ

### Screen Overview
- ใช้เพื่อตรวจสอบข้อมูลจากระบบประกันกลุ่มที่ใช้ในการประมวลผล Estimate และ Actual โดยมีการกำหนดขั้นตอนและสิทธิ์การใช้งานแยกตามบทบาท Maker และ Checker

### Screen Design
หน้าจอ นำเข้าข้อมูล Reconcile Data
Description
| No. | หัวข้อ | รายละเอียด |
| 1 | วัตถุประสงค์ (Objective) | เพื่อตรวจสอบข้อมูลสำหรับประมวลผล |
| 2 | ผู้ใช้งาน และ สิทธิ์ที่ได้รับ(Target Users and authorization) | ฝ่ายคณิตศาสตร์ประกันภัยต่อ |
| 3 | การกระทำกับหน้าจอ (Actions) | กดปุ่ม 'Download' |
| 4 | อธิบายรายละเอียด (Description) | รายละเอียดของหน้าจอมีดังนี้1. ตารางแสดงผลข้อมูลFieldTypeDescriptionValidation/ ActionExampleรายการข้อมูลLabelรายการของข้อมูลสำหรับประมวลผลแสดงเป็น LabelList of PolicyRI typeLabelประเภทข้อมูลประกันภัยต่อเพื่อจำแนกว่านำไปใช้กับข้อมูล Estimate, Actualแสดงเป็น Label Estimate/Actual, Estimate, ActualวันและเวลาดำเนินการLabelวันที่ Download หรือ Update ข้อมูลล่าสุดแสดงผลรูปแบบ DD/MM/YYYY HH:MM:SS รายละเอียด ดังนี้DD = วันที่ เช่น 31MM = เดือน เช่น 12YYYY = ปี พ.ศ. เช่น 2569HH:MM:SS = เวลา เช่น 21:00:0031/12/2569 21:00:00จำนวนรายการLabelแสดงจำนวนรายการของข้อมูลล่าสุดแสดงเป็น Label1,000สถานะข้อมูลLabelแสดงสถานะปัจจุบันของข้อมูลล่าสุดแสดงสถานะปัจจุบันของข้อมูลสำหรับรายการ List of Policy จะแสดงสถานะของการ Download fileเมื่อกด Download ระหว่างระบบ Generate file จะแสดง กำลังดำเนินการเมื่อ Download สำเร็จ แสดง นำส่งไฟล์สำเร็จกรณีเกิดปัญหา Download ไม่สำเร็จ แสดง นำส่งไฟล์ไม่สำเร็จติดต่อ IT Supportสำหรับรายการ อื่นๆ ระบบจะวางไฟล์ที่ Shared drive ของคณิตศาสตร์ RI Estimate - ข้อมูลล่าสุดจากระบบประกันกลุ่มโดยจะ Update ทุกสิ้นเดือนเวลา 21:00 น.folder Group_RI/Estimate/{Period}Actual - ข้อมูลล่าสุดจากระบบประกันกลุ่มโดยจะ Update เมื่อมีการกดประมวลผล Actualfolder Group_RI/Actual/{Period}ระหว่างระบบนำเข้าข้อมูล แสดง กำลังดำเนินการกรณีนำเข้าและวางไฟล์สำเร็จ แสดง นำส่งไฟล์สำเร็จกรณีนำเข้าหรือวางไฟล์ไม่สำเร็จ แสดง นำส่งไฟล์ไม่สำเร็จติดต่อ IT Supportนำส่งไฟล์สำเร็จPeriodLabelแสดง period หรือ period quarterList of policy แสดง Period ล่าสุดของข้อมูลEstimate แสดง Period ของการประมวลผล Estimate เช่น 202601Actual แสดง Period Quarter เมื่อมีการประมวลผล Actual เช่น 2026Q1202601ดำเนินการ/PeriodButton/Labelปุ่มสำหรับเรียกดูข้อมูล/ Period ของข้อมูลแสดงปุ่ม download ข้อมูลDownload2. รายการข้อมูล2.1. List of PolicyRP-RC-001 Policy_{FROM}_{TO}_{TREATY}\groupri\landing\{period}\report_landing\Policy_{FROM}_{TO}_{TREATY}.xlsxเมื่อกด Download ระบบแสดง Popup หน้าจอ Download Excel fileเมื่อกด ตกลง ระบบจะ Generate Excel file ตามเงื่อนไขที่ผู้ใช้งานระบุ Click here to expand... 2.2. สำหรับรายการต่อไปนี้ สามารถ Download ผ่านหน้าจอ หรือ Shared path ตามรอบของการประมวลผลEstimate Premium Layer RP-RC-002 Est_PremiumLayer_{YYYY}{MM}\groupri\estimate\{period}\report_reconcile\Est_PremiumLayer_{YYYY}{MM}.xlsxActual Premium Layer RP-RC-003 Act_PremiumLayer_{YYYY}{QQ}\groupri\actual\{period}\report_reconcile\Act_PremiumLayer_{YYYY}{MM}.xlsxAlteration RP-RC-004 Alteration_{YYYY}{QQ}\groupri\actual\{period}\report_reconcile\Alteration_{YYYY}{QQ}.xlsxPremium and Movement RP-RC-005 Premium_Movement_{YYYY}{QQ}\groupri\actual\{period}\report_reconcile\Premium_Movement_{YYYY}{QQ}.xlsxMember Over-age RP-RC-006 MemberOverAge_{YYYY}{QQ}\groupri\actual\{period}\report_reconcile\MemberOverAge_{YYYY}{QQ}.xlsxInvestigation expenseRP-RC-007 InvestigationExpense_{YYYY}{QQ}\groupri\actual\{period}\report_reconcile\InvestigationExpense_{YYYY}{QQ}.xlsx |


===== PAGE 1289389364 | Software Requirements Specification > 03. Business Processes and Screens Design > 03. Module Report (RP) =====
(empty page)


===== PAGE 1289389363 | Software Requirements Specification > 03. Business Processes and Screens Design > 03. Module Report (RP) > RP-RC-001 Policy_{FROM}_{TO}_{TREATY} =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 14/01/2026 | pongsathorn.pa | Policy_{FROM}_{TO}_{TREATY} | xlsx | Policy_20240101_20241231_ALL |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูลกรมธรรม์ตามเงื่อนไข |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เข้าหน้าจอ BD-RC-000 หน้าจอ Reconcile Dataกดปุ่ม Download ที่รายการ List of Policyระบุเงื่อนไขที่ต้องการจะเรียกดูข้อมูลกดตกลงระบบ Generate รายงานเป็น xlsx ไฟล์สำหรับ Download |


===== PAGE 1312490471 | Software Requirements Specification > 03. Business Processes and Screens Design > 03. Module Report (RP) > RP-RC-001 Policy_{FROM}_{TO}_{TREATY} > RP-RC-001 Ex =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 14/01/2026 | pongsathorn.pa | Policy_{FROM}_{TO}_{TREATY} | xlsx | Policy_20240101_20241231_ALL |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูลกรมธรรม์ตามเงื่อนไข |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เข้าหน้าจอ BD-RC-000 หน้าจอ Reconcile Dataกดปุ่ม Download ที่รายการ List of Policyระบุเงื่อนไขที่ต้องการจะเรียกดูข้อมูลกดตกลงระบบ Generate รายงานเป็น xlsx ไฟล์สำหรับ Download |


===== PAGE 1294992107 | Software Requirements Specification > 03. Business Processes and Screens Design > 03. Module Report (RP) > RP-RC-002 Est_PremiumLayer_{YYYY}{MM} =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 14/01/2026 | pongsathorn.pa | Est_PremiumLayer_{YYYY}{MM} | xlsx | Est_PremiumLayer_202601 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Estimate Premium Layer ของกรมธรรม์ประกันกลุ่ม ที่ผ่านการประมวลผล Estimate แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Estimate |


===== PAGE 1312490473 | Software Requirements Specification > 03. Business Processes and Screens Design > 03. Module Report (RP) > RP-RC-002 Est_PremiumLayer_{YYYY}{MM} > RP-RC-002 Ex =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 14/01/2026 | pongsathorn.pa | Est_PremiumLayer_{YYYY}{MM} | xlsx | Est_PremiumLayer_202601 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Estimate Premium Layer ของกรมธรรม์ประกันกลุ่ม ที่ผ่านการประมวลผล Estimate แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Estimate |


===== PAGE 1312490521 | Software Requirements Specification > 03. Business Processes and Screens Design > 03. Module Report (RP) > RP-RC-003 Act_PremiumLayer_{YYYY}{QQ} =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 14/01/2026 | pongsathorn.pa | Act_PremiumLayer_{YYYY}{QQ} | xlsx | Act_PremiumLayer_2026Q1 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Actual Premium Layer ของกรมธรรม์ประกันกลุ่ม ที่ผ่านการประมวลผล Actual แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Actual |


===== PAGE 1312490523 | Software Requirements Specification > 03. Business Processes and Screens Design > 03. Module Report (RP) > RP-RC-003 Act_PremiumLayer_{YYYY}{QQ} > RP-RC-003 Ex =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 14/01/2026 | pongsathorn.pa | Act_PremiumLayer_{YYYY}{QQ} | xlsx | Act_PremiumLayer_2026Q1 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Actual Premium Layer ของกรมธรรม์ประกันกลุ่ม ที่ผ่านการประมวลผล Actual แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Actual |


===== PAGE 1294992100 | Software Requirements Specification > 03. Business Processes and Screens Design > 03. Module Report (RP) > RP-RC-004 Alteration_{YYYY}{QQ} =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 14/01/2026 | pongsathorn.pa | Alteration_{YYYY}{QQ} | xlsx | Alteration_2026Q1 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Alteration ของกรมธรรม์ประกันกลุ่ม ที่ผ่านการประมวลผล Actual แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Actual |


===== PAGE 1312490475 | Software Requirements Specification > 03. Business Processes and Screens Design > 03. Module Report (RP) > RP-RC-004 Alteration_{YYYY}{QQ} > RP-RC-004 Ex =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 14/01/2026 | pongsathorn.pa | Alteration_{YYYY}{QQ} | xlsx | Alteration_2026Q1 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Alteration ของกรมธรรม์ประกันกลุ่ม ที่ผ่านการประมวลผล Actual แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Actual |


===== PAGE 1294992103 | Software Requirements Specification > 03. Business Processes and Screens Design > 03. Module Report (RP) > RP-RC-005 Premium_Movement_{YYYY}{QQ} =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 14/01/2026 | pongsathorn.pa | Premium_Movement_{YYYY}{QQ} | xlsx | Premium_Movement_2026Q1 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Premium and Movement ของกรมธรรม์ประกันกลุ่ม ที่ผ่านการประมวลผล Actual แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Actual |


===== PAGE 1312490477 | Software Requirements Specification > 03. Business Processes and Screens Design > 03. Module Report (RP) > RP-RC-005 Premium_Movement_{YYYY}{QQ} > RP-RC-005 Ex =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 14/01/2026 | pongsathorn.pa | Premium_Movement_{YYYY}{QQ} | xlsx | Premium_Movement_2026Q1 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Premium and Movement ของกรมธรรม์ประกันกลุ่ม ที่ผ่านการประมวลผล Actual แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Actual |


===== PAGE 1294992110 | Software Requirements Specification > 03. Business Processes and Screens Design > 03. Module Report (RP) > RP-RC-006 MemberOverAge_{YYYY}{QQ} =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 14/01/2026 | pongsathorn.pa | MemberOverAge_{YYYY}{QQ} | xlsx | MemberOverAge_2026Q1 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Member Over-age ของกรมธรรม์ประกันกลุ่ม ที่ผ่านการประมวลผล Actual แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Actual |


===== PAGE 1312490479 | Software Requirements Specification > 03. Business Processes and Screens Design > 03. Module Report (RP) > RP-RC-006 MemberOverAge_{YYYY}{QQ} > RP-RC-006 Ex =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 14/01/2026 | pongsathorn.pa | MemberOverAge_{YYYY}{QQ} | xlsx | MemberOverAge_2026Q1 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Member Over-age ของกรมธรรม์ประกันกลุ่ม ที่ผ่านการประมวลผล Actual แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Actual |


===== PAGE 1295253709 | Software Requirements Specification > 03. Business Processes and Screens Design > 03. Module Report (RP) > RP-RC-007 InvestigationExpense_{YYYY}{QQ} =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 14/01/2026 | pongsathorn.pa | InvestigationExpense_{YYYY}{QQ} | xlsx | InvestigationExpense_2026Q1 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Investigation expense ของกรมธรรม์ประกันกลุ่ม ที่ผ่านการประมวลผล Actual แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Actual |


===== PAGE 1312490481 | Software Requirements Specification > 03. Business Processes and Screens Design > 03. Module Report (RP) > RP-RC-007 InvestigationExpense_{YYYY}{QQ} > RP-RC-007 Ex =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 14/01/2026 | pongsathorn.pa | InvestigationExpense_{YYYY}{QQ} | xlsx | InvestigationExpense_2026Q1 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Investigation expense ของกรมธรรม์ประกันกลุ่ม ที่ผ่านการประมวลผล Actual แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Actual |


===== PAGE 1314422842 | Software Requirements Specification > 03. Business Processes and Screens Design > 03. Module Report (RP) > RP-RC-012 I_Master_{YYYY}{MM} =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 14/01/2026 | pongsathorn.pa | I_Master_{YYYY}{MM} | xlsx | I_Master_202601 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับนำเข้าข้อมูล I-Master |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |


===== PAGE 1314422844 | Software Requirements Specification > 03. Business Processes and Screens Design > 03. Module Report (RP) > RP-RC-012 I_Master_{YYYY}{MM} > RP-RC-012 Ex =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 14/01/2026 | pongsathorn.pa | I_Master_{YYYY}{MM} | xlsx | I_Master_202601 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับนำเข้าข้อมูล I-Master |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |

