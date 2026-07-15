===== PAGE 1319108810 | Functional Specification > 02. Process Specification. > RIG-PS-10 ส่งข้อมูล Estimate เข้า EDW =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | ส่งข้อมูล estimate เข้า EDW |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล(Time) | Manual : Trigger จากหน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |
| 4 | ข้อมูลตั้งต้น(Input) | tx_rig_est_hd.status = 'SUCCESS' |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | tx_rig_est_hd , tx_rig_est_policy_hd , tx_rig_est_policy_dt , tx_rig_est_mem_dt , tx_rig_est_bdr |
| 6 | อธิบายรายละเอียด(Description) | ให้ระบบดำเนินการ sync ข้อมูลเข้า EDW ผ่าน Process โดยให้ trigger เมื่อกดปุ่ม ยืนยันข้อมูล EST.ที่ หน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate ดำเนินการสร้าง queue ในการส่งข้อมูล โดยตรวจสอบจากรายการที่กดยืนยันข้อมูลจากหน้าจอกรณีเลือก ยืนยันข้อมูล มากกว่า 1 รายการให้ทำรายการแรกให้สำเร็จก่อน แล้วค่อยทำ queue ต่อไป ตามขั้นตอนดังนี้สร้าง transaction เพื่อบันทึกข้อมูล process ดังนี้WS-RIG-002-01 Insert EDW Process (Estimate)สร้างข้อมูล Standard template ดังนี้WS-RIG-002-02 Insert STD (Estimate)เมื่อ sync transaction ของ queue แรกสำเร็จ ให้ update ข้อมูลดังนี้WS-RIG-002-03 Update EDW Status (Estimate)ดำเนินการสร้างข้อมูลของ queue ถัดไปโดยเริ่มจากข้อ 1.ตรวจสอบ responseCode ของรายการที่ดำเนินการเสร็จถ้าเท่ากับ "000" ให้Update tx_rig_est_hd.status = APPROVEUpdate tx_rig_est_hd.edw_status = 1Update tx_rig_est_hd.edw_status_desc = รอพิจารณาข้อมูล STD Templateถ้าเท่ากับ "100" ให้Update tx_rig_est_hd.status = SENDERRUpdate tx_rig_est_hd.edw_status = 11Update tx_rig_est_hd.edw_status_desc = ประมวลผลไม่สำเร็จเมื่อมีการเปลี่ยนแปลงสถานะรายการที่ EDW จะ sync ข้อมูล ดังนี้WS-RIG-002-04 Select EDW Status (Estimate) |


===== PAGE 1319109283 | Functional Specification > 02. Process Specification. > RIG-PS-11 ส่งข้อมูล Estimate เข้า MPS =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | ส่งข้อมูล estimate เข้า MPS |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล(Time) | Manual : Trigger จากหน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |
| 4 | ข้อมูลตั้งต้น(Input) | tx_rig_est_hd.status = 'SUCCESS' |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | tx_rig_est_hd , tx_rig_est_policy_hd , tx_rig_est_policy_dt , tx_rig_est_mem_dt , tx_rig_est_bdr |
| 6 | อธิบายรายละเอียด(Description) | ให้ระบบดำเนินการ sync ข้อมูลเข้า EDW ผ่าน Process โดยให้ trigger เมื่อกดปุ่ม ยืนยันข้อมูล EST.ที่ หน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate เมื่อกระบวนการ RIG-PS-06 ประมวลผล Estimate SUCCESS ทุกรายการ (*31/03/26)ดำเนินการสร้าง queue ในการส่งข้อมูล โดยตรวจสอบจากรายการที่กดยืนยันข้อมูลจากหน้าจอกรณีเลือก ยืนยันข้อมูล มากกว่า 1 รายการให้ทำรายการแรกให้สำเร็จก่อน แล้วค่อยทำ queue ต่อไป ตามขั้นตอนดังนี้สร้าง transaction เพื่อบันทึกข้อมูล process ดังนี้WS-RIG-002-07 Insert การส่งข้อมูลเข้า EDW-iReport (Estimate)เมื่อ sync transaction ของ queue แรกสำเร็จ ให้ update ข้อมูลดังนี้WS-RIG-002-06 Update MPS Header (Estimate)ดำเนินการสร้างข้อมูลของ queue ถัดไปโดยเริ่มจากข้อ 1.ตรวจสอบ responseCode ของรายการที่ดำเนินการเสร็จถ้าเท่ากับ "000" ให้Update tx_rig_est_hd.mps_status = 7Update tx_rig_est_hd.mps_status_desc = ยืนยันนำเข้าข้อมูลสำเร็จถ้าเท่ากับ "100" ให้Update tx_rig_est_hd.mps_status = 100Update tx_rig_est_hd.mps_status_desc = ยืนยันนำเข้าไม่สำเร็จ |


===== PAGE 1322647585 | Functional Specification > 02. Process Specification. > RIG-PS-12 ส่งข้อมูล Actual เข้า EDW =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | ส่งข้อมูล actual เข้า EDW |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล(Time) | Manual : Trigger จากหน้าจอ RIG-SD-008 หน้าจอ จัดการข้อมูลประมวลผล Actual |
| 4 | ข้อมูลตั้งต้น(Input) | tx_rig_act_hd.status = 'SUCCESS' |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | tx_rig_act_hd, tx_rig_act_bdr_new_renew, tx_rig_act_bdr_claim, tx_rig_act_bdr_alter, tx_act_snap_policy |
| 6 | อธิบายรายละเอียด(Description) | ให้ระบบดำเนินการ sync ข้อมูลเข้า EDW ผ่าน Process โดยให้ trigger เมื่อกดปุ่ม ยืนยันข้อมูล ที่ หน้าจอ RIG-SD-008 หน้าจอ จัดการข้อมูลประมวลผล Actual ดำเนินการสร้าง queue ในการส่งข้อมูล โดยตรวจสอบจากรายการที่กดยืนยันข้อมูลจากหน้าจอกรณีเลือก ยืนยันข้อมูล มากกว่า 1 รายการให้ทำรายการแรกให้สำเร็จก่อน แล้วค่อยทำ queue ต่อไป ตามขั้นตอนดังนี้สร้าง transaction เพื่อบันทึกข้อมูล process ดังนี้WS-RIG-002-01 Insert EDW Process (Actual)สร้างข้อมูล Standard template ดังนี้WS-RIG-002-02 Insert STD (Actual)เมื่อ sync transaction ของ queue แรกสำเร็จ ให้ update ข้อมูลดังนี้WS-RIG-002-03 Update EDW Status (Actual)ดำเนินการสร้างข้อมูลของ queue ถัดไปโดยเริ่มจากข้อ 1.ตรวจสอบ responseCode ของรายการที่ดำเนินการเสร็จถ้าเท่ากับ "000" ให้Update tx_rig_act_hd.status = APPROVEUpdate tx_rig_act_hd.edw_status = 1Update tx_rig_act_hd.edw_status_desc = รอพิจารณาข้อมูล STD Templateถ้าเท่ากับ "100" ให้Update tx_rig_act_hd.status = SENDERRUpdate tx_rig_act_hd.edw_status = 11Update tx_rig_act_hd.edw_status_desc = ประมวลผลไม่สำเร็จเมื่อมีการเปลี่ยนแปลงสถานะรายการที่ EDW จะ sync ข้อมูล ดังนี้WS-RIG-002-04 Select EDW Status (Actual) |

